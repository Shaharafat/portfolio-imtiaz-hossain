import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const gotoElement = (e) => {
    e.preventDefault()
    const hash = e.target.hash;
    const element = document.querySelector(hash)
    const top = element ? element.offsetTop : 0;
    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      })
    }
  };
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className="header-content">
          <a className="header__home" href="#intro" onClick={gotoElement}>
            <img src={logo} alt="site logo" className="header__image" />
          </a>
          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__list__item">
                <a
                  className="header__nav__list__item__link"
                  onClick={gotoElement}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="header__nav__list__item">
                <a

                  href="#tools"
                  className="header__nav__list__item__link"
                  onClick={gotoElement}
                >
                  Tools
                </a>
              </li>
              <li className="header__nav__list__item">
                <a
                href="#hobby"
                  className="header__nav__list__item__link"
                  onClick={gotoElement}
                >
                  Hobby
                </a>
              </li>
              <li className="header__nav__list__item">
                <a
                href="#testimonials"
                  onClick={gotoElement}
                  className="header__nav__list__item__link"
                >
                  Testimonials
                </a>
              </li>
              <li className="header__nav__list__item">
                <a
                href="#contact"
                  onClick={gotoElement}
                  className="header__nav__list__item__link"
                >
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
