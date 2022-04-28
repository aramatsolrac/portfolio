import "./ProjectsCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function ProjectsCard(image, title, link, tech, code) {
  return (
    <div className="projectsCard">
      <div className="projects__item">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt="meowdopt" className="projects__img" />
        </a>
      </div>
      <div className="projects__description">
        <div>
          <h3>{title}</h3>
          <scan>{tech}</scan>
        </div>
        <div>
          <a
            className="projects__link"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            {"Code"}
          </a>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
