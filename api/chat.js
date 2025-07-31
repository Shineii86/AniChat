import { getPersona } from "../utils/characters.js";

export default async function handler(req, res) {
  const { character, message, model } = req.query;

  if (!character || !message || !model) {
    return res.status(400).json({ error: "Missing required query parameters." });
  }

  const persona = getPersona(character);
  const userInput = `${persona}\n\nUser: ${message}`;
  const isGemini = model === "gemini";

  const apiUrl = isGemini
    ? `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`
    : "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    ...(isGemini ? {} : { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` })
  };

  const payload = isGemini
    ? {
        contents: [
          {
            parts: [{ text: userInput }]
          }
        ]
      }
    : {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: persona },
          { role: "user", content: message }
        ]
      };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      return res.status(500).json({
        error: "AI API call failed",
        details: errorText
      });
    }

    const data = await response.json();

    const reply = isGemini
      ? data?.candidates?.[0]?.content?.parts?.[0]?.text
      : data?.choices?.[0]?.message?.content;

    res.status(200).json({
      character,
      reply: reply || "No response from model.",
      creator: "Shinei Nouzen",
      github: "https://github.com/Shineii86",
      telegram: "https://telegram.me/Shineii86",
      message: "Build with ❤️ by Shinei Nouzen",
      timestamp: new Date().toLocaleString("en-IN", { hour12: true })
    });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Server crashed", details: err.message });
  }
}
