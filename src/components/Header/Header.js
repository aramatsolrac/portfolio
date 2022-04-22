import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Menu from "../Menu/Menu";

function Header(props) {
  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <FontAwesomeIcon icon={faCode} className="header__icon" />
            <p>Tamara Carlos</p>
          </Link>
          <div className="header__menu">
            <div>{isMobile ? null : <Menu />}</div>
            <div>
              <button onClick={props.toggleTheme} className="header__button">
                {props.theme === "light" ? (
                  <FontAwesomeIcon icon={faMoon} size="xl" />
                ) : (
                  <FontAwesomeIcon icon={faSun} size="xl" />
                )}
              </button>
            </div>
            <div>{isMobile ? <DropDownMenu /> : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
