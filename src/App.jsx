import React from 'react'

// Main components Import
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

// anime JS library import
// import anime from 'animejs/lib/anime.es.js';

function App() {
  return (
    <>
      <Landing />
      <Nav />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
