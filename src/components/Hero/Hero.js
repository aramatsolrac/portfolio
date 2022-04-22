import "./Hero.scss";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="hero" id="about">
      <div className="hero__wrapper">
        <div className="hero__content">
          <Typed
            strings={[
              "Hey 👋",
              "I'm Tamara :)",
              "I'm a Full Stack Developer 💻",
              "I'm a lifelong learner 📚",
              "I love 💻",
              "I love 🐱",
              "I love 🐶",
              "I love 🪴",
              "I love 🧩",
              "I love 📚",
              "I love 🏕️",
              "I love 🥾",
              "I love 🚵🏻",
            ]}
            typeSpeed={30}
            backSpeed={40}
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
