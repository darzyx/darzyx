import React from "react";

const Header = () => (
  <section className="header" id="header">
    <nav className="navbar">
      <div className="nav-left">
        <a className="link" onClick={() => window.location.reload()}>
          <span className="bra">〈</span>
          darzyx
          <span className="ket">〉</span>
        </a>
      </div>
      <div className="nav-right">
        <a
          onClick={() =>
            document
              .querySelector("#projects-heading")
              .scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <span className="bra">〈</span>
          projects
          <span className="ket">〉</span>
        </a>
      </div>
      <div className="nav-right">
        <a
          onClick={() =>
            document
              .querySelector("#contact-heading")
              .scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <span className="bra">〈</span>
          contact
          <span className="ket">〉</span>
        </a>
      </div>
    </nav>
    <div className="content">
      <h1 className="title">Dario Sanchez</h1>
      <h3 className="subtitle">Front-end/UI Developer</h3>
    </div>
    <div className="triangle"></div>
  </section>
);

export default Header;
