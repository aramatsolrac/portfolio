import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faNetworkWired,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__wrapper">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__content">
          <div className="skills__item">
            <div className="skills__subtitle">
              <FontAwesomeIcon icon={faComputer} />
              <h3>Frontend</h3>
            </div>
            <div>
              <p>- HTML</p>
              <p>- CSS</p>
              <p>- BEM</p>
              <p>- SASS</p>
              <p>- Flexbox</p>
              <p>- Responsive Design</p>
              <p>- JavaScript</p>
              <p>- React</p>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills__subtitle">
              <FontAwesomeIcon icon={faNetworkWired} />
              <h3>Backend</h3>
            </div>
            <div>
              <p>- Node</p>
              <p>- Express</p>
              <p>- Knex</p>
              <p>- MySQL</p>
              <p>- Web APIs</p>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills__subtitle">
              <FontAwesomeIcon icon={faGear} />
              <h3>Other</h3>
            </div>
            <div>
              <p>- GitHub</p>
              <p>- Command Line</p>
              <p>- Jira</p>
              <p>- Heroku</p>
              <p>- Postman</p>
              <p>- Figma</p>
              <p>- Firebase</p>
              <p>- Chakra UI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
