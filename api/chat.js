import { getPersona } from "../utils/characters.js";

export default async function handler(req, res) {
  try {
    const { character, message, model } = req.query;

    if (!character || !message || !model) {
      return res.status(400).json({ error: "Missing required query parameters." });
    }

    const persona = getPersona(character);
    const userInput = `${persona}\n\nUser: ${message}`;
    const isGemini = model.toLowerCase().startsWith("gemini");

    // Gemini API config
    const GEMINI_MODEL = "gemini-2.5-flash"; // Use latest stable Gemini model
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

    // OpenAI GPT config
    const openaiUrl = "https://api.openai.com/v1/chat/completions";

    const headers = isGemini
      ? {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        }
      : {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        };

    const payload = isGemini
      ? {
          contents: [
            {
              parts: [{ text: userInput }],
            },
          ],
          // Optional: add generationConfig as needed e.g. temperature, maxOutputTokens
          // generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
        }
      : {
          model: "gpt-4o-mini", // or whichever GPT model you prefer
          messages: [
            { role: "system", content: persona },
            { role: "user", content: message },
          ],
        };

    // Choose URL based on model
    const apiUrl = isGemini ? geminiUrl : openaiUrl;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();

    if (!response.ok) {
      console.error("API Error:", rawText);
      return res.status(response.status).json({
        error: "AI API call failed",
        details: rawText,
      });
    }

    const data = JSON.parse(rawText);

    // Extract reply from Gemini or OpenAI response
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
      timestamp: new Date().toLocaleString("en-IN", { hour12: true }),
    });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Server crashed", details: err.message });
  }
}
