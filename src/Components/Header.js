import React from "react";

const Header = () => (
  <section className="header" id="header">
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
      <h1 className="title">Dario Sanchez</h1>
      <h3 className="subtitle">Software Developer</h3>
    </div>
    <div className="triangle"></div>
  </section>
);

export default Header;
