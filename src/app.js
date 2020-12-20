import React from 'react'

import About from './components/About';
import Header from './components/Header';
import Hobby from './components/Hobby';
import Intro from './components/Intro';
import Tools from './components/Tools';

// styles
import './styles/styles.scss'

const App = () => (
  <div>
    <Header/>
    <Intro/>
    <About/>
    <Tools/>
    <Hobby/>
  </div>
)

export default App;