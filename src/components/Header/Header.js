import "./Header.scss";
import { Link } from "react-router-dom";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  // return (
  //   <div className="header__wrapper">
  //     <div className="header">
  //       <div className="header__container">
  //         <Link to="/" className="header__logo">
  //           <FontAwesomeIcon icon={faCode} className="header__icon" />
  //           <p>Tamara Carlos</p>
  //         </Link>
  //         <div className="header__menu">
  //           <div>
  //             <button onClick={props.toggleTheme}>
  //               {props.theme === "light" ? (
  //                 <FontAwesomeIcon icon={faMoon} size="lg" />
  //               ) : (
  //                 <FontAwesomeIcon icon={faSun} size="lg" />
  //               )}
  //             </button>
  //           </div>
  //           <DropDownMenu />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <FontAwesomeIcon icon={faCode} className="header__icon" />
            <p>Tamara Carlos</p>
          </Link>
          <div className="header__menu">
            <div>
              <button onClick={props.toggleTheme} className="header__button">
                {props.theme === "light" ? (
                  <FontAwesomeIcon icon={faMoon} size="xl" />
                ) : (
                  <FontAwesomeIcon icon={faSun} size="xl" />
                )}
              </button>
            </div>
            <DropDownMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
