import React from "react";
import profileImage from "../images/profileImage.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__content content-wrapper">
        <article className="about__text">
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
            src={profileImage}
            className="about__image"
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
