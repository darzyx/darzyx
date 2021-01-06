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
          Self-taught frontend engineer. I enjoy challenges that involve both
          logical reasoning and aesthetics. My goal is to have everything I
          create be highly usable and visually appealing, and I love learning
          new things that equip me towards that end.
        </p>
        <br />
        <p>
          Outside of engineering, I do improv, practice jiu-jitsu, and read
          about crypto/blockchain tech.
        </p>
      </div>
    </div>
    <div className="triangle"></div>
  </section>
);

export default About;
