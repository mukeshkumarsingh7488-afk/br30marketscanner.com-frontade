# 🚀 BR30 Market Scanner

Professional Real-Time Market Scanner built for Traders, Investors, and Market Analysts.

BR30 Market Scanner provides live market data, momentum scanning, OI analysis, volume tracking, gainers/losers detection, TradingView integration, and multi-market monitoring from a single dashboard.

---

# 🌐 Live Demo

Frontend:
https://br30marketscanner-com-frontade.vercel.app

Backend:
https://br30marketscanner-com-backend.onrender.com

---

# 📸 Screenshots

## Login Page

![Login](screenshots/login.png)

## Register Page

![Register](screenshots/register.png)

## Forgot Password

![Forgot Password](screenshots/forgot.png)

---

## Equity Stock Scanner

![Equity Stock Scanner](screenshots/equty-stock-scanner.png)

## Equity Stock Option Scanner

![Equity Stock Option Scanner](screenshots/equty-stock-option-scanner.png)

## Future Stock Scanner

![Future Stock Scanner](screenshots/future-stock-scanner.png)

## Future Stock Option Scanner

![Future Stock Option Scanner](screenshots/future-stock-option-scanner.png)

## Index Future Scanner

![Index Future Scanner](screenshots/index-future-scanner.png)

## Index Option Scanner

![Index Option Scanner](screenshots/index-option-scanner.png)

## Market Heatmap

![Market Heatmap](screenshots/market-heatmap1.png)

---

## User Subscription Tracker

![User Subscription Tracker](screenshots/user-subscription-track.png)

## User Management

![User Management](screenshots/uaer-managment.png)

## Payment Tracker

![Payment Tracker](screenshots/pement-tracker.png)

## Bulk Mail Marketing

![Bulk Mail Marketing](screenshots/bulk-mail-markating.png)

---

## Alert Notification Bell

![Alert Bell](screenshots/nav-bell-signal-alaart.png)

## User Profile Menu

![User Profile](screenshots/nav-user-profile-with-roal.png)

---

# ✨ Features

## 📈 Equity Stock Scanner

- Real-Time Equity Data
- Top Gainers Detection
- Top Losers Detection
- High Volume Detection
- Momentum Tracking
- Trade Signal Generation
- TradingView Integration

---

## 🎯 Equity Stock Option Scanner

- CE / PE Tracking
- OI Change Analysis
- Volume Analysis
- Premium Movement Detection
- Smart Signal Detection
- Option Activity Monitoring

---

## 📊 Future Stock Scanner

- Futures Price Tracking
- OI Build-Up Detection
- Long Build-Up Signals
- Short Build-Up Signals
- Volume Expansion Analysis

---

## 🚀 Future Stock Option Scanner

- Future Option Activity
- Premium Tracking
- OI Analysis
- Smart Signal Detection
- Trend Monitoring

---

## 📉 Index Future Scanner

Supported Indices:

- NIFTY
- BANKNIFTY
- FINNIFTY
- MIDCPNIFTY
- NIFTYNXT50
- SENSEX
- BANKEX

Features:

- Live Futures Data
- OI Monitoring
- Momentum Analysis
- Volume Analysis

---

## 🎯 Index Option Scanner

Supported Indices:

- NIFTY
- BANKNIFTY
- FINNIFTY
- MIDCPNIFTY
- NIFTYNXT50
- SENSEX
- BANKEX

Features:

- CE & PE Monitoring
- OI Analysis
- Premium Tracking
- Smart Trade Signals

---

## 🔥 OI Spurts Scanner

Detects:

- Long Build-Up
- Short Build-Up
- Long Unwinding
- Short Covering

---

## 📊 Volume Scanner

Detects:

- Unusual Volume Activity
- High Participation Stocks
- Momentum Stocks
- Institutional Activity

---

## 🟩 Market Heatmap

Visual Market Overview

- Sector Strength
- Market Direction
- Momentum Zones
- Relative Strength

---

## 📈 TradingView Integration

Features:

- One Click Chart Open
- Direct Symbol Navigation
- Real-Time Chart Analysis

---

# 🚀 Tech Stack

## Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=fff)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=fff)

---

## Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=fff)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=fff)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=fff)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=fff)

---

## Market Data APIs

![Upstox](https://img.shields.io/badge/Upstox_Market_Data-6F3FF5?style=for-the-badge)
![Instrument_Master](https://img.shields.io/badge/Instrument_Master-00C853?style=for-the-badge)

---

## Deployment & Tools

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=fff)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=fff)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=fff)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=fff)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=000)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-00ED64?style=for-the-badge&logo=mongodb&logoColor=fff)

---

# 📁 Project Structure

```bash
br30marketscanner-com-frontade
│
├── images/
│
├── public/
│
├── screenshots/
│
├── src/
│   │
│   ├── api/
│   │   ├── authApi.js
│   │   ├── scannerApi.js
│   │   └── subscriptionApi.js
│   │
│   ├── components/
│   │   ├── FilterPanel.jsx
│   │   ├── Loader.jsx
│   │   ├── MarketSummary.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── ScannerTable.jsx
│   │   └── SubscriptionGuard.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminUsers.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Heatmap.jsx
│   │   ├── Login.jsx
│   │   ├── OISpurts.jsx
│   │   ├── Register.jsx
│   │   ├── ResetPassword.jsx
│   │   ├── Subscription.jsx
│   │   ├── TopGainers.jsx
│   │   ├── TopLosers.jsx
│   │   ├── VerifyOtp.jsx
│   │   └── VolumeBreakout.jsx
│   │
│   ├── utils/
│   │   └── validators.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

# 📡 Supported Markets

| Market               | Status |
| -------------------- | ------ |
| Equity Stocks        | ✅     |
| Equity Stock Options | ✅     |
| Stock Futures        | ✅     |
| Future Stock Options | ✅     |
| Index Futures        | ✅     |
| Index Options        | ✅     |

---

# 🔐 Security Features

- Environment Variables Protection
- API Access Control
- Token Based Authentication
- Secure Backend Architecture

---

# ⚡ Performance Features

- Instrument Master Caching
- Optimized API Calls
- Fast Refresh
- Smart Filtering
- Low Latency Dashboard

---

# 🎯 Target Users

- Intraday Traders
- Option Buyers
- Option Sellers
- Swing Traders
- Scalpers
- Market Analysts
- Investors

---

# 👨‍💻 Developed By

Mukesh Raj

Founder — BR30 Group

🌐 BR30 Ecosystem

- BR30 Trader
- BR30 Kart
- BR30 Algo
- BR30 Founder
- BR30 Market Scanner

---

# 📬 Contact

📧 **Email**
[br30service.contact@gmail.com](mailto:br30service.contact@gmail.com)

💼 **LinkedIn**
[linkedin.com/in/mukesh-raj-b75a65253](https://www.linkedin.com/in/mukesh-raj-b75a65253)

🐙 **GitHub**
[github.com/mukeshkumarsingh7488-afk](https://github.com/mukeshkumarsingh7488-afk)

🌐 **BR30 Group**
[br-30-group-com.vercel.app](https://br-30-group-com.vercel.app)

👨‍💻 **BR30 Founder**  
[br30-com.vercel.app](https://br30-com.vercel.app)

---

# ⭐ Support

If you like this project, don't forget to give it a Star ⭐

---

© 2026 BR30 Group. All Rights Reserved.
