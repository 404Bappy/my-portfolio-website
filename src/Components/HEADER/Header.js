import React from "react";
import "./Header.css";
import CTA from "./CTA";
import myimg from "../../Assets/meimg.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello i'm</h5>
        <h1>Md. Khairul Bashar</h1>
        <h5 className="text-light">Software Developer</h5>
        
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={myimg} height={420} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
