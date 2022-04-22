import "./Projects.scss";
import meowdoptImage from "../../assets/images/meowdopt.jpg";
import meowdoptAPIImage from "../../assets/images/meowdopt-api.png";
import inStockImage from "../../assets/images/instock.png";
import adviceImage from "../../assets/images/advice-generator.png";
import brainflixImage from "../../assets/images/brainflix.png";
import brainflixAPIImage from "../../assets/images/brainflix-api.jpg";
import moviesImage from "../../assets/images/movies-search.png";
import bandsiteImage from "../../assets/images/band-site.png";
import travelImage from "../../assets/images/travel-site.png";
import coffeeImage from "../../assets/images/coffee-shop.png";
import spaceImage from "../../assets/images/space.jpg";
import aluraImage from "../../assets/images/alura.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__wrapper">
        <div>
          <h2 className="projects__title">Projects</h2>
          <div className="projects__container">
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://meowdopt.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={meowdoptImage}
                    alt="meowdopt"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>meowdopt</h3>
                  <p>SASS | Chakra UI | React | Sweetalert2</p>
                </div>
                <div>
                  <a
                    className="projects__link"
                    href="https://github.com/aramatsolrac/meowdopt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Code"}
                  </a>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://meowdopt-api.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={meowdoptAPIImage}
                    alt="meowdopt-api"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>meowdopt API</h3>
                  <p>Node | Express | Knex | MySQL </p>
                </div>
                <div>
                  <a
                    className="projects__link"
                    href="https://github.com/aramatsolrac/meowdopt-API"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Code"}
                  </a>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://instockproject.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={inStockImage}
                    alt="instock"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>InStock</h3>
                  <p>SASS | React | Node | Express </p>
                </div>
                <div className="projects__private-repo">
                  <p>Private Repo</p>
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://advice-generator-project.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={adviceImage}
                    alt="advice-generator"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>Advice Generator</h3>
                  <p>SASS | React | Node | Express </p>
                </div>
                <div>
                  <a
                    className="projects__link"
                    href="https://github.com/aramatsolrac/advice-generator-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Code"}
                  </a>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://tamara-carlos-brainflix.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={brainflixImage}
                    alt="brainflix"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>BrainFlix</h3>
                  <p>SASS | React | Node | Express | Sweetalert2 </p>
                </div>
                <div className="projects__private-repo">
                  <p>Private Repo</p>
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://brainflix-api.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={brainflixAPIImage}
                    alt="brainflix"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>BrainFlix API</h3>
                  <p> Node | Express </p>
                </div>
                <div className="projects__private-repo">
                  <p>Private Repo</p>
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://aramatsolrac.github.io/moviesAPI/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={moviesImage}
                    alt="brainflix"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>Movies Search</h3>
                  <p> Sass | JavaScript | TMDB API </p>
                </div>
                <div>
                  <a
                    className="projects__link"
                    href="https://github.com/aramatsolrac/moviesAPI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Code"}
                  </a>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://aramatsolrac.github.io/BrainStation/bandsite/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={bandsiteImage}
                    alt="brainflix"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>Bandsite</h3>
                  <p> Sass | JavaScript | API | Sweetalert2</p>
                </div>
                <div className="projects__private-repo">
                  <p>Private Repo</p>
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://aramatsolrac.github.io/BrainStation/travelsite/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={travelImage}
                    alt="brainflix"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>Travel Site</h3>
                  <p> HTML | CSS| BEM </p>
                </div>
                <div className="projects__private-repo">
                  <p>Private Repo</p>
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://aramatsolrac.github.io/BrainStation/coffee_shop/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={coffeeImage}
                    alt="brainflix"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>Coffee Shop</h3>
                  <p> HTML | CSS| BEM </p>
                </div>
                <div className="projects__private-repo">
                  <p>Private Repo</p>
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://aramatsolrac.github.io/spacestagram/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={spaceImage}
                    alt="brainflix"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>Spacestagram</h3>
                  <p> HTML | CSS | JavaScript | Nasa API </p>
                </div>
                <div>
                  <a
                    className="projects__link"
                    href="https://github.com/aramatsolrac/spacestagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Code"}
                  </a>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
            <div className="projects__box">
              <div className="projects__item">
                <a
                  href="https://aramatsolrac.github.io/alura-challenge-front-end/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={aluraImage}
                    alt="brainflix"
                    className="projects__img"
                  />
                </a>
              </div>
              <div className="projects__description">
                <div>
                  <h3>Alura Challenge</h3>
                  <p> HTML | CSS | JavaScript | Firebase </p>
                </div>
                <div>
                  <a
                    className="projects__link"
                    href="https://github.com/aramatsolrac/alura-challenge-front-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Code"}
                  </a>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
