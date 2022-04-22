import "./Menu.scss";
import { HashLink } from "react-router-hash-link";

function Menu() {
  return (
    <div className="menu__content">
      <HashLink smooth to="/#skills" className="menu__link">
        Skills
      </HashLink>
      <HashLink smooth to="/#projects" className="menu__link">
        Projects
      </HashLink>
      <HashLink smooth to="/#contact" className="menu__link">
        Contact
      </HashLink>
    </div>
  );
}

export default Menu;
