import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className="header-content">
          <a href="#" className="header__home">
            <img src={logo} alt="site logo" className="header__image" />
          </a>
          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__list__item">
                <a href="#about" className="header__nav__list__item__link">
                  About
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#tools" className="header__nav__list__item__link">
                  Tools
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#hobby" className="header__nav__list__item__link">
                  Hobby
                </a>
              </li>
              <li className="header__nav__list__item">
                <a
                  href="#testimonials"
                  className="header__nav__list__item__link"
                >
                  Testimonials
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#contact" className="header__nav__list__item__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
