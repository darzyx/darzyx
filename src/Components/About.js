import React from "react";

const About = () => (
  <section className="about">
    <h2 className="heading">
      About
      <hr className="divider" />
    </h2>
    <div className="content">
      <div className="portrait-container">
        <div className="portrait" />
      </div>
      <div className="bio">
        <p>
          Hey! My name is Dario, and I am a front-end/UI developer and recent
          university graduate (UCLA Physics '17) living in Pittsburgh, PA. I
          enjoy challenges that involve logical reasoning and aesthetics.
          Everything I create should both be highly usable and visually
          appealing, and I love learning new things that equip me towards that
          end.
        </p>
        <br />
        <p>I also love hiking, animals, chess, and Jiu-Jitsu.</p>
      </div>
    </div>
    <div className="triangle"></div>
  </section>
);

export default About;
