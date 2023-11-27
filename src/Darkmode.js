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
        <button type="button" onClick={toggleTheme}>
          Abcd Efgh Ijkl
        </button>
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
            </div>
            <div className="hero-section-image">
              <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1701066185~exp=1701066785~hmac=2736e7d8a11ed977ce8e5367e6a890220b08ef8dc0c5478c5b72867cccc7eb49" alt="fsdggreeww"></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Darkmode;
