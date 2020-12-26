import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";

// favicon
import favicon from "./images/favicon.png";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hobby from "./components/Hobby";
import Intro from "./components/Intro";
import Tools from "./components/Tools";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

// styles
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./styles/styles.scss";

const App = () => {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Router>
        <Header />
        <Intro />
        <About />
        <Tools />
        <Hobby />
        <Testimonial />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
