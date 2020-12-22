import React from "react";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="content-wrapper footer-content">
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            &copy; All right reserved by Imtiaz Hossain
          </p>
        </div>
        <div className="footer__top-button">
          <button
            onClick={scrollToTop}
            className="button-primary footer__button"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
