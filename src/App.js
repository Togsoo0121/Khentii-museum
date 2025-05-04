/* src/App.js */
import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Khentii Museum</h1>
      </header>
      <main className="main-content">
        <section>
          <h2>Welcome to Khentii Museum</h2>
          <p>
            Discover the rich history and cultural heritage of Khentii province.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Khentii Museum. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
