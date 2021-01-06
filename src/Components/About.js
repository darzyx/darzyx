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
      <LazyLoad once>
        <div className="portrait-container">
          <div className="portrait" />
        </div>
      </LazyLoad>
      <div className="bio">
        <p>
          Hey! My name is Jose Dario, and I am a self-taught frontend engineer
          and university graduate (UCLA Physics B.A. '17) living in Pittsburgh,
          PA. I enjoy challenges that involve logical reasoning and aesthetics.
          Everything I create should both be highly usable and visually
          appealing, and I have fun learning new things that equip me towards
          that end.
        </p>
        <br />
        <p>
          Outside of development, I do improv comedy, practice Brazilian
          jiu-jitsu, and read about cryptocurrencies.
        </p>
      </div>
    </div>
    <div className="triangle"></div>
  </section>
);

export default About;