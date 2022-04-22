import React from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  // dark mode theme
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // scroll top
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app" data-theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FontAwesomeIcon
        icon={faAngleUp}
        className="scrollTop"
        onClick={scrollTop}
        size="2xl"
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
    </div>
  );
}

export default App;
