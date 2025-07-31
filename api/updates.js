export default async function handler(req, res) {
  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
  const data = await response.json();

  res.status(200).json({
    updates: data.data.slice(0, 10),
    creator: "Shinei Nouzen",
    github: "https://github.com/Shineii86",
    telegram: "https://telegran.me/Shineii86",
    message: "Build with ❤️ by Shinei Nouzen",
    timestamp: new Date().toLocaleString("en-IN", { hour12: true })
  });
}
