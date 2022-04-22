import React, { Component } from "react";
import "./DropDownMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Menu";

class DropDownMenu extends Component {
  state = {
    dropdownVisible: false,
  };

  toggleDropdown = (event) => {
    if (!this.state.dropdownVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState((prevState) => ({
      dropdownVisible: !prevState.dropdownVisible,
    }));
  };

  handleOutsideClick = (event) => {
    if (!this.node.contains(event.target)) this.toggleDropdown();
  };

  renderDropDownMenu = () => {
    return (
      <form onSubmit={this.props.filterCats}>
        <div className="dropdown__box">
          {/* <div className="dropdown__content">
            <HashLink smooth to="/#about" className="dropdown__link">
              About
            </HashLink>
            <HashLink smooth to="/#skills" className="dropdown__link">
              Skills
            </HashLink>
            <HashLink smooth to="/#projects" className="dropdown__link">
              Projects
            </HashLink>
            <HashLink smooth to="/#contact" className="dropdown__link">
              Contact
            </HashLink>
          </div> */}
          <Menu />
        </div>
      </form>
    );
  };

  render() {
    return (
      <div
        className="dropdown__container"
        ref={(node) => {
          this.node = node;
        }}
      >
        <div className="dropdown__trigger">
          {this.state.dropdownVisible ? (
            <FontAwesomeIcon
              icon={faClose}
              onClick={this.toggleDropdown}
              className="dropdown__icon"
              size="xl"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={this.toggleDropdown}
              className="dropdown__icon"
              size="xl"
            />
          )}
        </div>
        {this.state.dropdownVisible && this.renderDropDownMenu()}
      </div>
    );
  }
}

export default DropDownMenu;
