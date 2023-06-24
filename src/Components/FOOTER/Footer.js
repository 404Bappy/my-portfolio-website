import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">
        KB BAPPY
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <BsFacebook size={20} />
        </a>
        <a href="https://instagram.com">
          <BsInstagram size={20} />
        </a>
        <a href="https://twitter.com">
          <BsTwitter size={20} />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; KBB PlayGround. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
