import React from "react";
import HobbyBox from "./HobbyBox";
import { hobbyData } from "../data/hobbyData";

const Hobby = () => {
  return (
    <div className="hobby" id="hobby">
      <div className="content-wrapper hobby__content">
        {hobbyData.map((hobby) => (
          <HobbyBox key={hobby.title} icon={hobby.icon} title={hobby.title} />
        ))}
      </div>
    </div>
  );
};

export default Hobby;
