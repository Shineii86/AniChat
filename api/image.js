export default async function handler(req, res) {
  const category = req.query.category || "waifu";
  const type = req.query.type || "sfw"; // Default to sfw for safety
  
  // Validate type parameter
  if (!["sfw", "nsfw"].includes(type.toLowerCase())) {
    return res.status(400).json({
      error: "Invalid type parameter. Use 'sfw' or 'nsfw'",
      creator: "Shinei Nouzen",
      github: "https://github.com/Shineii86",
      telegram: "https://telegram.me/Shineii86",
      message: "Build with ❤️ by Shinei Nouzen",
      timestamp: new Date().toLocaleString("en-IN", { hour12: true })
    });
  }

  try {
    const apiUrl = `https://api.waifu.pics/${type.toLowerCase()}/${category}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();

    res.status(200).json({
      image: data.url,
      category,
      type: type.toLowerCase(),
      creator: "Shinei Nouzen",
      github: "https://github.com/Shineii86",
      telegram: "https://telegram.me/Shineii86",
      message: "Build with ❤️ by Shinei Nouzen",
      timestamp: new Date().toLocaleString("en-IN", { hour12: true })
    });

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch image",
      details: error.message,
      creator: "Shinei Nouzen",
      github: "https://github.com/Shineii86",
      telegram: "https://telegram.me/Shineii86",
      message: "Build with ❤️ by Shinei Nouzen",
      timestamp: new Date().toLocaleString("en-IN", { hour12: true })
    });
  }
}
