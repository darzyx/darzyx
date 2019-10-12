import React from "react";

const Contact = () => (
  <section className="contact" id="contact">
    <h2 id="contact-heading" className="heading">
      Contact
      <hr className="divider" />
    </h2>
    <div className="content">
      <form
        action="https://formspree.io/xbnpknpx"
        className="form"
        method="POST"
      >
        <input className="name" name="Name" placeholder="Name" type="text" />
        <input
          className="email"
          name="Email"
          placeholder="Email"
          type="email"
        />
        <input className="phone" name="Phone" placeholder="Phone" type="tel" />
        <textarea
          className="message"
          name="Message"
          placeholder="Message"
          required
          rows="8"
          type="text"
        />
        <div className="buttons">
          <button type="submit">Send</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <div className="external">
        <div className="info-row">
          <h4 className="location">Pittsburgh, PA</h4>
          <h4 className="phone-number">(661) 424-7600</h4>
          <h4 className="email-address">dario.zyx@gmail.com</h4>
        </div>
        <div className="divider-row">
          <hr className="divider" />
        </div>
        <nav className="icons-row">
          <div className="icon-column">
            <a
              aria-label="My LinkedIn"
              className="tooltipped"
              href="http://www.linkedin.com/in/darzyx"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="tooltip">LinkedIn</span>
              <i className="icon-linkedin"></i>
            </a>
          </div>
          <div className="icon-column">
            <a
              aria-label="Send Email"
              className="tooltipped"
              href="mailto:dario.zyx@gmail.com"
            >
              <span className="tooltip">Email</span>
              <i className="icon-email"></i>
            </a>
          </div>
          <div className="icon-column">
            <a
              aria-label="My GitHub"
              className="tooltipped"
              href="http://www.github.com/darzyx"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="tooltip">GitHub</span>
              <i className="icon-github"></i>
            </a>
          </div>
          <div className="icon-column">
            <a
              aria-label="Call Me"
              className="tooltipped"
              href="tel:16614247600"
            >
              <span className="tooltip">Call</span>
              <i className="icon-phone"></i>
            </a>
          </div>
        </nav>
        <div className="divider-row">
          <hr className="divider" />
        </div>
        <footer className="footer">
          <p className="footnote">
            Banner:{" "}
            <i>
              The Orion Nebula taken from a backyard in Petaluma, California
            </i>{" "}
            by Bryan Goff
          </p>
          <p className="footnote">
            Website: Copyright © 2018 Jose Dario Sanchez. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  </section>
);

export default Contact;
