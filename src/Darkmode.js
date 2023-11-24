import React, { useEffect, useState } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <header>
        <a href="" alt="logo">
          Abcd Efgh Ijkl
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </nav>
      </header>

      <main
        style={{
          background: theme === "dark-theme" ? "#333" : "#fff",
          color: theme === "dark-theme" ? "#fff" : "#333",
        }}
      >
        <section>
          <div className="container grid grid-two-column">
            <div className="hero-section-data">
              <h1>React Dark Mode</h1>
              <p>
                fhgfdbhfdfd gfdhsgfdh f fd fds fdshfdfds
                fdfffghdffghdffghfdfgfhdfhcdc dfhvdbhvbvhcdv cbv dfdf nhdfv
              </p>
              <a href="#" className="btn" onClick={toggleTheme}>
                Toggle Mode
              </a>
            </div>
            <div className="hero-section-image">
              <img
                href="https://unsplash.com/photos/a-woman-holding-a-leaf-over-her-head-4Pu6_OpZcZ4"
                alt="lady"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Darkmode;
