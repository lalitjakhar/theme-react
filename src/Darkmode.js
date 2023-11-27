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
        <h1 onClick={toggleTheme}>Theme React</h1>
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
              <h2>React Dark Mode</h2>
              <p>
                In React, a theme is typically used to define the visual style
                of a web application. Changing the theme involves updating the
                styles or appearance of various components based on a selected
                theme. React allows you to implement theme changing in different
                ways, but one common approach is to use context and state
                management.Make sure you have a React project set up, either
                using create-react-app or your preferred method.Create a folder
                to store your theme-related files. Inside this folder, you can
                have separate files for different themes.In each theme file,
                define the styles for your components. These can be simple
                JavaScript objects containing key-value pairs for CSS
                properties. In your React application, create a ThemeContext
                using React.createContext. This context will provide the current
                theme and a function to change the theme. Implement a
                ThemeProvider component that will manage the current theme state
                and provide it to the rest of your application.Wrap your entire
                application with the ThemeProvider to make the theme available
                to all components. to store your theme-related files. Inside
                this folder, you can have separate files for different themes.In
                each theme file, define the styles for your components. These
                can be simple JavaScript objects containing key-value pairs for
                CSS properties. In your React application, create a ThemeContext
                using React.createContext.
              </p>
            </div>
            <div className="hero-section-image">
              <img
                src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png"
                alt="fsdggreeww"
                style={{draggable:'false'}}
              ></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Darkmode;
