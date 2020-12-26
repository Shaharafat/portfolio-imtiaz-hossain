import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.svg";

const Header = () => {
  const nav = useRef(null);
  const [isMobileNavActive, setMobileNavStatus] = useState(false);

  if (typeof window !== "undefined") {
    let prevScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", () => {
      let currentScrollPosition = window.pageYOffset;
      let difference = currentScrollPosition - prevScrollPosition;

      if (difference < 0) {
        nav.current.classList.remove("hide-nav");
        nav.current.classList.add("show-nav");
      } else {
        nav.current.classList.add("hide-nav");
      }
      prevScrollPosition = currentScrollPosition;
    });
  }
  const hamburgerToggle = () => {
    setMobileNavStatus(!isMobileNavActive);
  };

  const gotoElement = (e) => {
    e.preventDefault();
    const hash = e.target.hash;
    const element = document.querySelector(hash);
    const top = element ? element.offsetTop : 0;
    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    }
    setMobileNavStatus(false);
  };

  return (
    <div ref={nav} className="header">
      <div className="content-wrapper">
        <div className="header-content">
          <Link to="/" className="header__home" onClick={gotoElement}>
            <img src={logo} alt="site logo" className="header__image" />
          </Link>
          <nav className="header__nav">
            <div>
              {isMobileNavActive ? (
                <span className="menu-icon" onClick={hamburgerToggle}>
                  <FaTimes />
                </span>
              ) : (
                <span className="menu-icon" onClick={hamburgerToggle}>
                  <FaBars />
                </span>
              )}
            </div>
            <ul
              className={`header__nav__list ${
                isMobileNavActive ? "active" : ""
              }`}
            >
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
