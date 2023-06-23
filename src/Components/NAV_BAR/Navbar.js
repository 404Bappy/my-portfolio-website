import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidUserCheck } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <BiSolidUserCheck />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navbar;
