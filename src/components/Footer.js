import React from "react";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content-wrapper footer-content">
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            &copy; All right reserved by Imtiaz Hossain
          </p>
        </div>
        <div className="footer__top-button">
          <a href="#" className="button-primary footer__button">
            <FaChevronUp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
