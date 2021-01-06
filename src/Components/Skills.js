import React from "react";
import LazyLoad from "react-lazyload";

const resume = require("../Media/resume.pdf");

const Skills = () => (
  <section className="skills">
    <h2 className="heading">
      Skills
      <LazyLoad height={15} once>
        <hr className="divider" />
      </LazyLoad>
    </h2>
    <div className="content">
      <div className="langs">
        <div className="left">
          <span className="js-icon" />
          <h5>JavaScript</h5>
          <h6>React + Hooks</h6>
          <h6>ES6, JSX</h6>
          <h6>Reusable Components</h6>
          <h6>Redux</h6>
          <h6>Phaser</h6>
        </div>
        <div className="middle">
          <span className="css-icon" />
          <h5>CSS3</h5>
          <h6>Styled Components</h6>
          <h6>Raw CSS</h6>
          <h6>SASS/SCSS</h6>
          <h6>Semantic UI</h6>
          <h6>Bootstrap</h6>
        </div>
        <div className="right">
          <span className="html-icon" />
          <h5>HTML5</h5>
          <h6>Accessibility</h6>
          <h6>Usability</h6>
        </div>
      </div>
      <div className="other">
        <div className="tools">
          <span className="tools-icon" />
          <h5>Tools</h5>
          <h6>Photoshop</h6>
          <h6>Command Line</h6>
          <h6>Git/GitHub</h6>
        </div>
        <div className="misc">
          <span className="puzzle-icon" />
          <h5>Misc</h5>
          <h6>Responsive Design</h6>
          <h6>Basic UX/Design</h6>
        </div>
        <div className="academic">
          <span className="academic-icon" />
          <h5>Currently Learning</h5>
          <h6>Rust</h6>
          <h6>Solidity</h6>
        </div>
      </div>
      <div className="download-container">
        <a
          className="download-link"
          href={resume}
          download="Dario-Sanchez-(resume).pdf"
        >
          <button className="download-button">Download Resume</button>
        </a>
      </div>
    </div>
    <div className="triangle"></div>
  </section>
);

export default Skills;
