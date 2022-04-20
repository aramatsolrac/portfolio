import "./Header.scss";
import { Link } from "react-router-dom";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import codeIcon from "../../assets/images/code.png";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <img
              src={codeIcon}
              alt=""
              width="30"
              height="30"
              className="header__img"
            />
            <p>Tamara Carlos</p>
          </Link>
          <div>
            <DropDownMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
