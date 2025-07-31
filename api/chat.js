export default async function handler(req, res) {
  const { character, message, model } = req.query;
  const persona = getPersona(character);

  const apiUrl = model === "gemini"
    ? "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_GEMINI_KEY"
    : "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: model !== "gemini" ? `Bearer YOUR_OPENAI_KEY` : undefined
  };

  const payload = model === "gemini"
    ? { contents: [{ parts: [{ text: `${persona}\n\nUser: ${message}` }] }] }
    : {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: persona },
          { role: "user", content: message }
        ]
      };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  const reply = model === "gemini"
    ? data.candidates?.[0]?.content?.parts?.[0]?.text
    : data.choices?.[0]?.message?.content;

  res.status(200).json({
    character,
    reply: reply || "No response",
    creator: "Shinei Nouzen",
    github: "https://github.com/Shineii86",
    telegram: "https://telegram.me/Shineii86",
    message: "Build with ❤️ by Shinei Nouzen",
    timestamp: new Date().toLocaleString("en-IN", { hour12: true })
  });
}

import { getPersona } from "../utils/characters";
