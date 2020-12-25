import React,{ useEffect, useRef} from "react";
import { createObserver } from '../helper'

const HobbyBox = ({ icon, title }) => {
  const hobbyElement = useRef(null);
  useEffect(() => {
    createObserver(hobbyElement.current);
  })
  return (
    <div ref={hobbyElement} className="hobbyBox off-animation">
      <p className="hobbyBox__title">{title}</p>
      <img src={icon} className="hobbyBox__icon" alt={title} />
    </div>
  );
};

export default HobbyBox;
