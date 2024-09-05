import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a class="mail-links" href="">
          mrdeveloper@gmail.com
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Linkedin
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> GitHub
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i> Instagram
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </p>
        <p>&copy; Mr. Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
