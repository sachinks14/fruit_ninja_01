# fruit_ninja_01
A browser-based Fruit Ninja clone built with HTML, CSS and JS - slice fruits, dodge bombs, survive 5 levels of increasing chaos — no frameworks, no libraries, just DOM manipulation and CSS animations..

## 🎮 Gameplay

- Fruits (apple, banana, lemon, watermelon) drift across the screen along independent animated paths.
- Click a fruit to slice it and earn a point.
- Click a bomb and it's game over.
- Every 20 seconds the game advances a level, and all fruit/bomb animations speed up — by Level 5, things get fast.
- After 15 seconds at Level 5, the game ends automatically.
- Your score and current level are tracked live in the header.

## ✨ Features

- Six independently animated objects (2 bombs, 4 fruit types), each with its own CSS `@keyframes` path and timing function
- Progressive difficulty across 5 levels via dynamically updated animation durations
- Score tracking and game-over screen with a "New Game" restart
- Manual "Reset" button to restart mid-run
- Fully responsive layout — scales cleanly from mobile to desktop

## 🛠️ Tech Stack

- **HTML5** — game structure
- **CSS3** — animations (`@keyframes`), responsive layout (`clamp()`, `min()`, viewport units)
- **Vanilla JavaScript** — game state, scoring, level progression, event handling

No build tools, no dependencies. Just open it in a browser.

## 📁 Project Structure

```
├── Game.html      # Main game page
├── Game.css       # Styling and animations
├── Game.js        # Game logic (scoring, levels, events)
├── background.jpg # Background image
├── apple.jpg
├── apple2.jpg      # banana
├── lemon.jpg
├── watermelon.jpg
└── bomb.jpg
```

> Note: image assets (`background.jpg`, `apple.jpg`, `apple2.jpg`, `lemon.jpg`, `watermelon.jpg`, `bomb.jpg`) need to be added to the project root for the game to render correctly.

## 🚀 Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Open `Game.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```
3. Start slicing!

## 🗺️ Roadmap

This is the frontend-only version of the project. Planned next steps:
- [ ] User authentication (login/signup)
- [ ] Spring Boot backend with MySQL for persistent data
- [ ] Global leaderboard and personal high-score tracking

## 📄 License

Feel free to fork, modify, and use this project for learning purposes.
