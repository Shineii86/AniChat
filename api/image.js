export default async function handler(req, res) {
  const category = req.query.category || "waifu";
  const response = await fetch(`https://api.waifu.pics/sfw/${category}`);
  const data = await response.json();

  res.status(200).json({
    image: data.url,
    category,
    creator: "Shinei Nouzen",
    github: "https://github.com/Shineii86",
    telegram: "https://telegram.me/Shineii86",
    message: "Build with ❤️ by Shinei Nouzen",
    timestamp: new Date().toLocaleString("en-IN", { hour12: true })
  });
}
