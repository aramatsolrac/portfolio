import "./Hero.scss";
import Typical from "react-typical";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div>
          <Typical
            steps={[
              "Hey 👋",
              1000,
              "I'm Tamara Carlos.",
              2000,
              "I'm a Full Stack Web Developer.",
              2000,
              "I love 💻",
              1000,
              "I love 🐱",
              1000,
              "I love 🐶",
              1000,
              "I love 🪴",
              1000,
              "I love 🧩",
              1000,
              "I love 🏕️",
              1000,
              "I love 🥾",
              1000,
              "I love 🚵🏻",
              1000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
