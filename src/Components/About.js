import React from "react";
import LazyLoad from "react-lazyload";

const About = () => (
  <section className="about">
    <h2 className="heading">
      About
      <LazyLoad height={15} once>
        <hr className="divider" />
      </LazyLoad>
    </h2>
    <div className="content">
      <div className="portrait-container">
        <LazyLoad height={150} once>
          <div className="portrait" />
        </LazyLoad>
      </div>
      <div className="bio">
        <p>
          Hey! My name is Dario, and I am a front-end/UI developer and recent
          university graduate (UCLA Physics B.A. '17) living in Pittsburgh, PA.
          I enjoy challenges that involve logical reasoning and aesthetics.
          Everything I create should both be highly usable and visually
          appealing, and I have fun learning new things that equip me towards
          that end.
        </p>
        <br />
        <p>
          Outside of development, I do improv comedy and Brazilian jiu-jitsu.
        </p>
      </div>
    </div>
    <div className="triangle"></div>
  </section>
);

export default About;
