export default async function handler(req, res) {
  const today = new Date();
  const m = today.getMonth() + 1;
  const d = today.getDate();

  const response = await fetch(`https://api.jikan.moe/v4/characters`);
  const data = await response.json();

  const birthdays = data.data.filter(c =>
    c.birthday && new Date(c.birthday).getDate() === d &&
    new Date(c.birthday).getMonth() + 1 === m
  );

  res.status(200).json({
    date: `${d}/${m}`,
    birthdays,
    creator: "Shinei Nouzen",
    github: "https://github.com/Shineii86",
    telegram: "https://telegram.me/Shineii86",
    message: "Build with ❤️ by Shinei Nouzen",
    timestamp: new Date().toLocaleString("en-IN", { hour12: true })
  });
}
