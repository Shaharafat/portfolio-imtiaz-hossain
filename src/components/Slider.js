import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import {items} from '../data/slideData'

const Slider = () => {
  const responsive = {
    0: { items: 1 },
  };

  return (
    <div>
      <AliceCarousel
        items={items}
        animationDuration={1000}
        autoPlayInterval={2000}
        buttonsDisabled={true}
        autoPlay={true}
        responsive={responsive}
        infinite
      />
    </div>
  );
};

export default Slider;