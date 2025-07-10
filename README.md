# 🎬 Expo React Native Movie App

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[![Tech: React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Tech: Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)]()
[![Tech: TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()
[![Tech: Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![Tech: Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)]()
[![CI: ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)]()
[![Build: Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)]()

---

## 📖 Description

A modern, full-featured **movie app** built with **Expo** and **React Native**. It uses **Appwrite** as a backend for analytics, **TMDB API** for movie data, and follows a robust, type-safe, and utility-first development approach. The app is modular, scalable, and production-ready.

---

## ✨ Features

- 🔎 **Movie Search:** Search movies using the TMDB API
- 🔥 **Trending Movies:** Displays trending movies based on search counts in Appwrite
- 🎞️ **Movie Details:** Detailed info for each movie (overview, genres, budget, revenue, companies)
- 📈 **Search Analytics:** Tracks & updates search counts in Appwrite
- 🧭 **Tabbed Navigation:** Home, Profile, Saved, and Search tabs with Expo Router
- 🧩 **Custom UI Components:** MovieCard, TrendingCard, SearchBar
- 🎨 **Responsive Styling:** NativeWind + Tailwind CSS for utility-first styling
- 🖼️ **Image Assets:** Custom icons & branding assets
- ✅ **Type Safety:** TypeScript interfaces for data models
- 🔐 **Environment Variables:** Secure API keys and configs via .env

---

## 🛠️ Tech Stack

- **React Native** — core framework for native apps
- **Expo** — toolchain for easy development & deployment
- **TypeScript** — strongly-typed JavaScript
- **Expo Router** — file-based routing & navigation
- **NativeWind** — Tailwind CSS for React Native
- **Tailwind CSS** — utility-first styling
- **Appwrite** — Backend-as-a-Service
- **TMDB API** — movie data source
- **ESLint** — linting with `eslint-config-expo`
- **Babel** — JavaScript compiler with `babel-preset-expo`
- **React Navigation** — navigation primitives
- **Expo Libraries:** fonts, images, haptics, status bar, splash screen, etc.

---

## 🚀 Demo

👉 **Coming Soon:** Add your live preview link here

### 📸 sample

![App Screenshot](assets/cinehub.gif)

---

## 📂 Project Structure

```
movie-app/
├── app/             # Main screens and navigation
├── components/      # Reusable UI components
├── constants/       # Static assets (icons, images)
├── services/        # API & backend logic (TMDB, Appwrite)
├── interfaces/      # TypeScript interfaces
├── types/           # Type declarations
├── assets/          # Images, icons
├── .env.example     # Example env file
├── tailwind.config.js
├── app.json / app.config.js
├── babel.config.js
├── README.md
```

---

## 🔐 Environment Variables

Manage API keys & secrets with a `.env` file.

### ✅ How to use

```bash
cp .env.example .env
```

Add your real keys:

```env
TMDB_API_KEY=YOUR_TMDB_API_KEY
APPWRITE_ENDPOINT=https://your-appwrite-endpoint
APPWRITE_PROJECT_ID=YOUR_PROJECT_ID
```

✅ Ensure `.env` is in `.gitignore`:

```gitignore
.env
node_modules
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+)
- Expo CLI

### Installation

```bash
git clone https://github.com/mbportz/cinehub.git && cd cinehub && npm install && npx expo start
```

---

## ✅ Lint & Format

```bash
npm run lint
```

---

## 🤝 Contributing

Pull requests are welcome!  
Open an issue to discuss ideas or changes.

✅ Please run `npm run lint` before submitting.

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

**Built with ❤️ using Expo & React Native**

✨ Happy coding! 🎬
