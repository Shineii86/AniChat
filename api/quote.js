export default async function handler(req, res) {
  const response = await fetch("https://api.animechan.io/v1/quotes/random");
  const quote = await response.json();

  res.status(200).json({
    quote,
    creator: "Shinei Nouzen",
    github: "https://github.com/Shineii86",
    telegram: "https://telegram.me/Shineii86",
    message: "Build with ❤️ by Shinei Nouzen",
    timestamp: new Date().toLocaleString("en-IN", { hour12: true })
  });
}
