import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import linkedinIcon from "../../assets/images/linkedin.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div>
          <h1 className="contact__title">Contact</h1>
          <p className="contact__text">
            {`I am currently open to new opportunities. If you have a question or
            just want to say hello, talk about code, pets, hiking, or even
            expand your network, please contact me and I will be delighted to
            talk with you! :)`}
          </p>
          <div className="contact__icons">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              onClick={() =>
                window.open(`mailto:tamaraaselau@gmail.com`, `_blank`)
              }
            />

            <a
              href="https://www.linkedin.com/in/tamaracarlos/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="linkedin" width={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
