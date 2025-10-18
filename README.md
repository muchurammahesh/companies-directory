# 🏢 Companies Directory  

[![GitHub Stars](https://img.shields.io/github/stars/muchurammahesh/companies-directory?style=flat&logo=github)](https://github.com/muchurammahesh/companies-directory/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/muchurammahesh/companies-directory?style=flat&logo=github)](https://github.com/muchurammahesh/companies-directory/network/members)

A **React + Vite** web app to explore **companies by industry and location** with search, filters, favorites, and detailed company views.  

![App Screenshot] <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/cc4a755b-fe5b-4db5-96f9-4605425eccfc" />


🌐 [**Live Demo**](https://companies-directory-app.netlify.app)  

---

## ✨ Features  
- 📋 **Browse Companies** – View all companies with name, industry, location, employees, and founded year.  
- 🔎 **Search & Filter** – Search by company name, filter by **industry** or **location**, or show only **favorites**.  
- ⭐ **Favorites** – Mark/unmark companies as favorites (persisted in localStorage).  
- 📄 **Details View** – Modal showing company information such as industry, location, employees, and founding year.  
- ⏳ **Resilience** – Loading skeletons, error handling, and empty states.  
- 📱 **Responsive & Accessible** – Works on mobile and desktop, with semantic HTML and keyboard navigation.  
- 🌙 **Dark Mode** – Supports light/dark themes.  

---

## 🛠 Tech Stack  

| Tech | Logo |
|------|------|
| ⚛️ React 18 | <img src="https://img.shields.io/badge/React-18-blue?logo=react" alt="React" /> |
| ⚡ Vite | <img src="https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E" alt="Vite" /> |
| 🧭 React Router | <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=react-router&logoColor=fff" alt="React Router" /> |
| 📦 Context API | <img src="https://img.shields.io/badge/Context%20API-61DAFB?logo=react" alt="Context API" /> |
| 🎨 Tailwind CSS | <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /> |
| 🎯 Lucide Icons | <img src="https://img.shields.io/badge/Lucide%20Icons-black?logo=lucide&logoColor=white" alt="Lucide Icons" /> |
| 🧪 Vitest + RTL | <img src="https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white" alt="Vitest" /> <img src="https://img.shields.io/badge/RTL-FF4154?logo=testing-library&logoColor=white" alt="RTL" /> |
| ☁️ Netlify | <img src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white" alt="Netlify" /> |

---

## 📂 Project Structure  

  

```

companies-directory/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── *tests*/                # Test files
│   │   ├── Navbar.test.jsx
│   │   
│   │
│   ├── api/
│   │   └── companies.js         # Mock API data for companies
│   │
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/              # Reusable UI components
│   │   ├── ui/
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── EmptyState.jsx
│   │   ├── FavoriteButton.jsx
│   │   ├── FilterBar.jsx
│   │   ├── LaunchCard.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pagination.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── context/
│   │   └── LaunchesProvider.jsx
│   │
│   ├── hooks/
│   │   └── useDebounce.jsx
│   │
│   ├── lib/
│   │   └── utils.js
│   │
│   ├── pages/
│   │   ├── LaunchDetails.jsx
│   │   └── LaunchesList.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
│
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.mjs
├── tsconfig.json
└── vite.config.mjs

````

---

## ⚡ Getting Started  

```bash
# 1️⃣ Clone repo
git clone https://github.com/muchurammahesh/companies-directory.git
cd companies-directory

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run dev server
npm run dev

# 4️⃣ Run tests
npm run test

# 5️⃣ Build for production
npm run build

# 6️⃣ Preview build locally
npm run preview
````

---

## ✅ Testing

This project uses **Vitest** with **React Testing Library**.

```bash
npm run test
```

**Coverage includes:**

* Rendering & filtering list by industry and location
* Favorites toggle & persistence
* Company details modal rendering

---

## 🌍 Deployment

The project is deployed on **Netlify**:
🔗 [**Live App**](https://companies-directory-app.netlify.app)

---

## 📌 GitHub Repository

🔗 [**companies-directory (GitHub)**](https://github.com/muchurammahesh/companies-directory)

---

## 📖 Assignment Context

This project was built as part of the **Frontlines Media React Assignment**, focusing on:

* Component-driven design
* Mock API integration with dynamic company data
* State & data handling with Context API
* Accessibility & responsiveness
* Testing using Vitest and React Testing Library

---

## 👤 Author

**Muchuram Mahesh**

📧 [maheshmuchuram40@gmail.com](mailto:maheshmuchuram40@gmail.com)

🌐 [Live Demo](https://companies-directory-app.netlify.app)

💻 [GitHub](https://github.com/muchurammahesh/companies-directory)

---

```


