import React, { Component } from "react";
import "./DropDownMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
          <div className="dropdown__content">
            <Link to="#about" className="dropdown__link">
              <p>About</p>
            </Link>
            <Link to="#skills" className="dropdown__link">
              <p>Skills</p>
            </Link>
            <Link to="#projects" className="dropdown__link">
              <p>Projects</p>
            </Link>
            <Link to="#contact" className="dropdown__link">
              <p>Contact</p>
            </Link>
          </div>
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
          <FontAwesomeIcon
            icon={faBars}
            onClick={this.toggleDropdown}
            className="dropdown__icon-bar"
            size="ls"
          />
        </div>
        {this.state.dropdownVisible && this.renderDropDownMenu()}
      </div>
    );
  }
}

export default DropDownMenu;
