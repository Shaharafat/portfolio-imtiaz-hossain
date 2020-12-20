import React from 'react'

import About from './components/About';
import Header from './components/Header';
import Hobby from './components/Hobby';
import Intro from './components/Intro';
import Tools from './components/Tools';
import Testimonial from './components/Testimonial';

// styles
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './styles/styles.scss'

const App = () => (
  <div>
    <Header/>
    <Intro/>
    <About/>
    <Tools/>
    <Hobby/>
    <Testimonial/>
  </div>
)

export default App;