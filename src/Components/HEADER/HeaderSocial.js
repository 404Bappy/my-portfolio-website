import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/md-khairul-bashar-3b61891bb/?fbclid=IwAR0fPwwPIPi9MfzqIVdUpYDVW7xkyMOs25-puOfZX09nL6RlUPYavlbsDVQ"
        target="_blank"
      >
        <BsLinkedin size={20}/>
      </a>
      <a
        href="https://github.com/404Bappy?fbclid=IwAR3qJWL3whUcQJ5bZCsi4CJXHcxEu7xglbVdrnmmJXyVHcHCo-kt4MuYzo4"
        target="_blank"
      >
        <BsGithub size={20}/>
      </a>
      <a href="https://www.facebook.com/arafat.bappy.779/" target="_blank">
        <FaFacebookSquare size={20}/>
      </a>
    </div>
  );
};

export default HeaderSocial;
