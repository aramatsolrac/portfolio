import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
        <h1 className="contact__title">Contact</h1>
        <p className="contact__text">
          {`I am currently open to new opportunities. If you have a question or want to say hello, talk about code, pets, hiking, or even expand your network, don't hesitate to contact me, and I will be delighted to chat with you! :)`}
        </p>
        <div className="contact__social">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="contact__icon"
            onClick={() =>
              window.open(`mailto:tamaraaselau@gmail.com`, `_blank`)
            }
            size="xl"
          />

          <a
            href="https://www.linkedin.com/in/tamaracarlos/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="contact__icon"
              size="xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
