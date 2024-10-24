import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
// import Programs from './components/Programs';
// import Team from './components/Team';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header aboutRef={aboutRef} contactRef={contactRef} />
      <HeroSection />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
