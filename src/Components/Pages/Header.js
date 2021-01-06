import React from "react";

import useWindowSize from "../useWindowSize";

const Header = () => {
  const { width } = useWindowSize();

  let bgImage = null;
  if (width <= 349) {
    bgImage = require("../../Media/Images/background-xs.jpg");
  } else if (width <= 499) {
    bgImage = require("../../Media/Images/background-sm.jpg");
  } else if (width <= 899) {
    bgImage = require("../../Media/Images/background-md.jpg");
  } else if (width <= 1199) {
    bgImage = require("../../Media/Images/background-lg.jpg");
  } else {
    bgImage = require("../../Media/Images/background-xl.jpg");
  }

  return (
    <section
      className="header"
      id="header"
      style={{
        background: `url(${bgImage}) center center/cover no-repeat`,
      }}
    >
      <nav className="navbar">
        <div className="nav-left">
          <button onClick={() => window.location.reload()}>
            <span className="bra">〈</span>
            darzyx
            <span className="ket">〉</span>
          </button>
        </div>
        <div className="nav-right">
          <button
            onClick={() =>
              document
                .querySelector("#projects-heading")
                .scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <span className="bra">〈</span>
            projects
            <span className="ket">〉</span>
          </button>
        </div>
        <div className="nav-right">
          <button
            onClick={() =>
              document
                .querySelector("#contact-heading")
                .scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <span className="bra">〈</span>
            contact
            <span className="ket">〉</span>
          </button>
        </div>
      </nav>
      <div className="content">
        <h1 className="title">Jose Dario Sanchez</h1>
        <h3 className="subtitle">Frontend Engineer</h3>
      </div>
      <div className="triangle"></div>
    </section>
  );
};

export default Header;
