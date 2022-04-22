import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__link">
            <a
              href="https://github.com/aramatsolrac"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="footer__icon"
                size="xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tamaracarlos/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footer__icon"
                size="xl"
              />
            </a>
            <a
              href="https://twitter.com/aramatsolrac"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="footer__icon"
                size="xl"
              />
            </a>
          </div>
          <div>
            <p>Tamara Carlos • © 2022 </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
