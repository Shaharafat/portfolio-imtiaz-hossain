import React from 'react'

import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import slide4 from "../images/slide-4.png";
import slide5 from "../images/slide-5.png";

const handleDragStart = (e) => e.preventDefault();

export const items = [
  <img src={slide1} onDragStart={handleDragStart} className="slide-images" />,
  <img src={slide2} onDragStart={handleDragStart} className="slide-images" />,
  <img src={slide3} onDragStart={handleDragStart} className="slide-images" />,
  <img src={slide4} onDragStart={handleDragStart} className="slide-images" />,
  <img src={slide5} onDragStart={handleDragStart} className="slide-images" />,
];