import "./Hero.scss";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="hero" id="about">
      <div className="hero__wrapper">
        <div className="hero__content">
          <Typed
            strings={[
              "Hey ð",
              "I'm Tamara :)",
              "I'm a Full Stack Web Developer ðŧ",
              "I'm a lifelong learner ð",
              "I love ðŧ",
              "I love ðą",
              "I love ðķ",
              "I love ðŠī",
              "I love ð§Đ",
              "I love ð",
              "I love ðïļ",
              "I love ðĨū",
              "I love ðĩðŧ",
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
