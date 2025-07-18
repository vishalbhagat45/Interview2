# 🛒 Product Listing UI - Vite + React + Tailwind CSS

A modern, responsive product listing frontend built using **Vite**, **React**, and **Tailwind CSS**, featuring:

- ✅ Card & Modal-based UI
- 🔍 Search & Sort functionality
- 📦 Pagination
- 🌗 Dark Mode toggle (with localStorage support)
- 🖼 Product images with smooth transitions

---

## 📸 Demo

![App Preview](./screenshot.png) <!-- replace with your screenshot filename -->

---

## 🚀 Features

- 🖼 **Product Cards** with hover effects
- 🧾 **Product Modal** (click any card to view details)
- 🔍 **Search Bar** (real-time filtering)
- ⬇️ **Sort Dropdown** (Price: Low to High / High to Low)
- 📄 **Pagination** (6 products per page)
- 🌗 **Dark Mode Toggle** (theme persists in `localStorage`)
- 📱 **Fully Responsive** for all devices

---

## 🛠 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/)
- ⚛️ [React](https://reactjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 💾 `localStorage` (for theme persistence)

---

## 📂 Folder Structure

```bash
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   └── Filters.jsx
│   ├── context/
│   │   └── ThemeContext.js
│   ├── data/
│   │   └── products.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── README.md
