<div align="center">
  
# [AniChatAPI](https://github.com/AniPulse)
*Your Ultimate Anime Chatbot Engine*

![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat&logo=vercel)
![Issues](https://img.shields.io/github/issues/Shineii86/AniChatAPI)
![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)

![Last Commit](https://img.shields.io/github/last-commit/Shineii86/AniChatAPI?style=for-the-badge)
![Repo Size](https://img.shields.io/github/repo-size/Shineii86/AniChatAPI?style=for-the-badge) [![GitHub Stars](https://img.shields.io/github/stars/Shineii86/AniChatAPI?style=for-the-badge)](https://github.com/Shineii86/AniChatAPI/stargazers) [![GitHub Forks](https://img.shields.io/github/forks/Shineii86/AniChatAPI?style=for-the-badge)](https://github.com/Shineii86/AniChatAPI/fork)
[![API Status](https://img.shields.io/website?down_color=lightgrey&down_message=offline&label=API%20Status&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fanichat.vercel.app)](https://anichat.vercel.app)


</div>

> 🌟 Build a full-featured anime chatbot API with multiple characters, real-time updates, quotes, images, recommendations, and free AI integrations – powered by OpenAI, Gemini, Jikan, Waifu.pics, and more!

---

## 📦 Features

- 🧠 **Role-Playing Characters** (Levi, Gojo, Megumin, etc.)
- 🗣️ **GPT / Gemini-Powered Chat**
- 🎬 **Latest Anime Updates** (via Jikan API)
- 🧾 **Anime Quotes & Photos**
- 🧠 **Anime Recommendations**
- 🎉 **Character Birthday System**
- 🌐 **Fully Hosted on Vercel**
- 💸 **Free & Open Source**

---

## 🚀 API Endpoints

| Endpoint           | Description                             | Example |
|--------------------|-----------------------------------------|---------|
| `/api/chat`        | Talk to a selected anime character       | `?character=Gojo&message=Hello&model=gpt` |
| `/api/quote`       | Get a random anime quote                | — |
| `/api/image`       | Get a random anime image (waifu, neko)  | `?category=neko` |
| `/api/updates`     | Current seasonal anime (real-time)       | — |
| `/api/recommend`   | Random anime recommendations             | — |
| `/api/birthdays`   | Today's character birthdays              | — |

---

## 🧠 Character Personalities

Defined in `/utils/characters.js`. Each persona is used to guide AI conversations:

```json
// Original characters
"Levi": "You are Levi Ackerman. You are cold, sharp, and to the point.",
"Megumin": "You are Megumin, a chuunibyou wizard obsessed with explosions!",
"Gojo": "You are Satoru Gojo, cool, confident, and sometimes goofy.",
"Shinobu": "You are Shinobu Kocho, sweet on the surface but deadly calm.",
    
// Added male characters
"Luffy": "You are Monkey D. Luffy. You're energetic, impulsive, and fiercely loyal to your crew.",
"Itachi": "You are Itachi Uchiha. You speak cryptically with profound wisdom, burdened by sacrifice.",
"Tanjiro": "You are Tanjiro Kamado. You're kind yet determined, with an exceptional sense of smell.",
"Killua": "You are Killua Zoldyck. You switch between playful innocence and lethal assassin instincts.",
    
// Added female characters
"Nezuko": "You are Nezuko Kamado. You communicate through muffled sounds and protect humans despite being a demon.",
"Zero Two": "You are Zero Two. You're flirtatious, rebellious, and obsessed with finding your 'darling'.",
"Mikasa": "You are Mikasa Ackerman. You're stoic, incredibly strong, and fiercely protective of Eren.",
"Marin": "You are Marin Kitagawa. You're bubbly, expressive, and passionate about cosplay."
````

You can expand the list as needed.

---

## 🔌 Free APIs Used

| API             | Purpose                | Link    |
| --------------- | ---------------------- | ------- |
| Jikan API       | Anime info, characters | [jikan.moe](https://jikan.moe)             |
| AnimeChan       | Anime quotes           | [animechan.io](https://animechan.io)      |
| Waifu.pics      | Anime image generation | [waifu.pics](https://waifu.pics/)          |
| OpenAI / Gemini | Conversational AI      | [openai.com](https://openai.com) / [makersuite.google.com](https://makersuite.google.com) |

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shineii86/AniChatAPI
cd AniChatAPI
```

### 2. Setup Environment

* Rename `.env.example` to `.env` (if you use local server)
* Or, set the following in Vercel:

```env
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key
```

### 3. Deploy to Vercel

* Push to GitHub
* Visit [vercel.com](https://vercel.com/) and import your repo
* Vercel auto-detects the API

---

## 🧪 Sample Request

```bash
GET /api/chat?character=Megumin&message=KonoSuba!&model=gpt
```

**Response**:

```json
{
  "character": "Megumin",
  "reply": "Explosion!!!",
  "creator": "Shinei Nouzen",
  "github": "https://github.com/Shineii86",
  "telegram": "https://telegran.me/Shineii86",
  "message": "Build with ❤️ by Shinei Nouzen",
  "timestamp": "India Date & Time 12H Format"
}
```

---

## 🛠 Contribution Guide

We welcome contributions from anime & tech fans! 🌸

1. 🍴 Fork this repo
2. 🌿 Create your feature branch (`git checkout -b new-feature`)
3. 🧪 Test and commit (`git commit -am 'Add new feature'`)
4. 🚀 Push to your branch (`git push origin new-feature`)
5. 📥 Create a Pull Request

---

## 🙏 Acknowledgements

Huge thanks to the creators of:

* [Jikan API](https://jikan.moe/)
* [AnimeChan](https://animechan.io)
* [Waifu.pics](https://waifu.pics/)
* [OpenAI](https://openai.com/)
* [Google Gemini](https://makersuite.google.com/)
* [Vercel](https://vercel.com/)

---

## 👤 Credits

> Project created by [**Shinei Nouzen**](https://github.com/Shineii86) Build with ❤️ passion for Anime, AI, and Open Source.

---

## ⚖️ License

This project is licensed under the **MIT License**.
Feel free to use, remix, and share it with proper credits.

---

## 📬 Support

* Issues: [GitHub Issues](https://github.com/Shineii86/AniRecommendAPI/issues)

## 🪪 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💕 Loved My Work?
🚨 [Follow me on GitHub](https://github.com/Shineii86/Shineii86)

⭐ [Give a star to this project](https://github.com/Shineii86/AniChatAPI/)

<a href="https://github.com/Shineii86/AniChatAPI">
<img src="https://github.com/Shineii86/AniPay/blob/main/Source/Banner6.png" alt="Banner">
</a>

## ☎️ Contact

<div align="center">
  
  *For inquiries or collaborations*
     
[![Telegram Badge](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat&logo=Telegram&logoColor=white)](https://telegram.me/Shineii86 "Contact on Telegram")
[![Instagram Badge](https://img.shields.io/badge/-Instagram-C13584?style=flat&logo=Instagram&logoColor=white)](https://instagram.com/ikx7.a "Follow on Instagram")
[![Pinterest Badge](https://img.shields.io/badge/-Pinterest-E60023?style=flat&logo=Pinterest&logoColor=white)](https://pinterest.com/ikx7a "Follow on Pinterest")
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?style=flat&logo=Gmail&logoColor=white)](mailto:ikx7a@hotmail.com "Send an Email")

  <sup><b>Copyright © 2025 <a href="https://telegram.me/Shineii86">Shinei Nouzen</a> All Rights Reserved</b></sup>

</div>
