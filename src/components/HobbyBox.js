import React from "react";

const HobbyBox = ({ icon, title }) => {
  return (
    <div className="hobbyBox">
      <p className="hobbyBox__title">{title}</p>
      <img src={icon} className="hobbyBox__icon" alt={title} />
    </div>
  );
};

export default HobbyBox;
