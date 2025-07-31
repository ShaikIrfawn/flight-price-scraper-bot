# ✈️ Singapore to Chennai Flight Price Scraper

This is a Node.js web scraper using Puppeteer and Express that fetches the lowest round-trip economy ticket price from Singapore (SIN) to Chennai (MAA) from Trip.com.

---

## 📦 Requirements

- Node.js ≥ 18
- Git
- Google Chrome (installed)
- Internet connection

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/flight-scraper.git
cd flight-scraper
```

### 2. Install dependencies

```bash
npm install
```

---

### 3. Update Chrome path (IMPORTANT)

Edit `flight-scraper.js` to match your Chrome installation path.

#### On **Windows**:
```js
executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
```

#### On **macOS**:
```js
executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
```

#### On **Linux**:
```js
executablePath: '/usr/bin/google-chrome-stable'
```

---

## 🚀 Run the scraper

```bash
npm start
```

Your scraper will start at:

```
http://localhost:3000/scrape
```

Example output:
```json
{
  "success": true,
  "price": "S$ 243"
}
```

---

## 🌐 Make it public (optional)

To allow Discord bots to access the scraper, use **ngrok**:

### 1. Install ngrok

```bash
npm install -g ngrok
```

### 2. Start tunnel

```bash
ngrok http 3000
```

You will get a public HTTPS URL like:

```
https://abc123.ngrok.io/scrape
```

---

## 📂 .gitignore (Already included)

```gitignore
node_modules/
*.log
.env
```

---

## 🛠 Troubleshooting

- ❌ `Waiting for selector failed`: Trip.com may have updated their layout. Update the selector in `flight-scraper.js`.

- ❌ `Cannot GET /scrape`: Ensure `npm start` is running and the route is correct.

- ✅ Running in free environments like **Render.com** or **Railway**? Consider using headless Chromium alternatives or Puppeteer-compatible scraping APIs.

---

## 🧠 Customization

You can edit:

- `flightUrl`: To change the flight route or travel dates  
- Discord integration: Discord Webhook to send results  
- Price thresholds: Set alerts if price is ≤ S$250

---

## 👨‍💻 Author

Created by **SHAIK IRFAWN**  
Pull requests and forks welcome 🙌
