import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>All Right Reserved &copy; RANKS</h1>
      <p>
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{" "}
        <Link to="/policy">Privacy Policy</Link>
      </p>
      <div className="social-icons">
        {/* Add your social icons here, for example: */}
        {/* <a href="#your-social-link">Social Icon 1</a> */}
      </div>
    </div>
  );
};

export default Footer;
