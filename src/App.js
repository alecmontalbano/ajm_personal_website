import React, {useRef, useEffect, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Pages from './contents/pages';
import Startup from './components/startup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import state from './store';
import './App.css';

export default function App() {
  const scrollArea = useRef();
  const onScroll = e => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return(
    <Router>
      <div className="App">
          <div className="foreground">
            {/* <Navbar/> */}
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
      </div>
      <Canvas className="canvas" orthographic camera={{zoom: state.zoom, position: [0, 0, 500]}}>
        <Suspense fallback={<Html center className="loading" children="Loading..." />}>
          <Pages />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </Router>
  );
}
