import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import DarkVeil from "./components/DarkVeil";

function App() {
  return (
    <div className="relative font-sans min-h-screen">
      <DarkVeil className="absolute inset-0 -z-10" />
      <div className="relative z-10 text-gray-800">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
