import React, { useEffect, useRef } from "react";

import profileImage from "../images/profileImage.jpg";
import { createObserver } from "../helper";

const About = () => {
  const textElement = useRef(null);
  const imageElement = useRef(null);

  useEffect(() => {
    createObserver(textElement.current);
    createObserver(imageElement.current);
  },[]);

  return (
    <div  className="about" id="about">
      <div className="about__content content-wrapper">
        <article ref={textElement} className="about__text off-animation">
          Hello, this is Mohammed{" "}
          <span className="about__text__name">
            Imtiaz Hossain
            <span className="down-bordered"></span>
          </span>
          . I am currently graduating from University of Dhaka, Bangladesh,
          major in Accounting & Information Systems. I am an expert Statistician
          and Data Analyst. I am skilled in computer softwares, such as MS
          Excel, SPSS, POWERPOINT, MS- Word. I can analyze and provide detailed
          report of statistical research.
        </article>
        <div className="about__image-section">
          <img
            ref={imageElement}
            src={profileImage}
            className="about__image off-animation"
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;