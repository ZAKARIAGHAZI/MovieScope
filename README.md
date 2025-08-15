# 🎬 MoviScope

MoviScope is a modern web application for discovering and searching movies. It offers a responsive interface, detailed movie pages, and an interactive carousel for featured films.

---

## ✨ Features

* Display popular and recent movies
* Search bar to find movies by title
* Detailed page for each movie (synopsis, rating, release date)
* Responsive design for mobile and large screens
* Interactive carousel for featured movies
* Smooth navigation with React Router DOM
* **Custom favicon for the application**

---

## 🛠 Technologies Used

* **Frontend:** React, CSS, Swiper.js
* **HTTP Requests:** Axios
* **External API** to fetch movie data
* **Routing:** React Router DOM

---

## 📁 Project Structure

```
moviscope/
├─ public/
│  ├─ titleIcon.svg
├─ src/
│  ├─ components/    # Reusable components
│  ├─ pages/         # Main pages (Home, MovieDetail, Search)
│  ├─ styles/        # CSS files
│  ├─ App.jsx
│  └─ index.css
│  └─ main.jsx
├─ api
├─ index.html
├─ .gitignore
├─ eslint.config.js
├─ package.json
└─ README.md
└─ vit.config.js
```

---

## ⚙️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/moviscope.git
```

2. **Navigate to the project folder:**

```bash
cd moviscope
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the application:**

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173` (Vite default). The SVG favicon will appear in the browser tab.

---

## 🚀 Usage

1. **Home Page:** Displays popular movies and the featured movies carousel.
2. **Search:** Use the search bar to find a specific movie.
3. **Movie Details:** Click a movie to see its detail page (synopsis, rating, release date, etc.).
4. **Navigation:** Simple menu to switch between sections.

---

## 🧩 Main Dependencies

* `react`
* `react-dom`
* `react-router-dom`
* `axios`
* `swiper`
* `@fortawesome/react-fontawesome` (for icons)

---

## 🤝 Contribution

Contributions are welcome! To suggest improvements:

1. Fork the project
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add a new feature'`)
4. Push the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under MIT. See the `LICENSE` file for details.

---

## 👤 Author

* Zakaria Ghazi – [GitHub Profile](https://github.com/ZAKARIAGHAZI)
