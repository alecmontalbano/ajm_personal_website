import React, {Component, useRef, useEffect} from 'react';
import './App.css';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import VFXPaletteBackground from './components/VFXPaletteBackground';
import PaletteBackground from './components/PaletteBackground';
import { VFXProvider } from 'react-vfx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mouseX: 0, mouseY: 0, canvas: false };
  }

  onmousemove=(e)=> {
      // set mouse position
      this.setState({ mouseX: e.screenX, mouseY: e.screenY });
      //set canvas
      if (!this.state.canvas || this.state.canvas === undefined )
        this.setState({ canvas: document.getElementsByTagName('canvas')[0] });      
  }
 
  render() {
    return(
      <Router>
          <div className="App" onMouseMove={this.onmousemove}>
            <VFXProvider>
              {/* <PaletteBackground mousex={this.state.mouseX} mousey={this.state.mouseY}></PaletteBackground> */}
              <VFXPaletteBackground canvas={this.state.canvas} mousex={this.state.mouseX} mousey={this.state.mouseY}></VFXPaletteBackground>
              <div className="foreground">
                <Navbar/>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/education">
                  <Education/>
                </Route>
                <Route path="/skills">
                  <Skills/>
            
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
              </div>
              </VFXProvider>
          </div>
        </Router>
    );
  }
}

export default App;
