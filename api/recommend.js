export default async function handler(req, res) {
  const response = await fetch("https://api.jikan.moe/v4/recommendations/anime");
  const data = await response.json();

  res.status(200).json({
    recommendations: data.data.slice(0, 5),
    creator: "Shinei Nouzen",
    github: "https://github.com/Shineii86",
    telegram: "https://telegram.me/Shineii86",
    message: "Build with ❤️ by Shinei Nouzen",
    timestamp: new Date().toLocaleString("en-IN", { hour12: true })
  });
}
