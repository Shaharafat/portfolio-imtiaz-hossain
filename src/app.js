import React from 'react'

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Tools from './components/Tools';

// styles
import './styles/styles.scss'

const App = () => (
  <div>
    <Header/>
    <Intro/>
    <About/>
    <Tools/>
  </div>
)

export default App;