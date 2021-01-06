import React, { Component } from "react";
import Header from "./Components/Pages/Header";
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Projects";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    );
  }
}

export default App;
