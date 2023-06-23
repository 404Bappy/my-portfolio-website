import React from "react";
import "./About.css";
import meImg from "../../Assets/meme.png";
import { FaAward } from "react-icons/fa";
import { LiaUsersCogSolid } from "react-icons/lia";
import { AiOutlineFolderAdd } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="aboutme-img">
            <img src={meImg} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about-card">
            <article className="a-card">
              <FaAward className="aboutIcon" />
              <h5>Experience</h5>
              <small>1+ Years Working Experience</small>
            </article>
            <article className="a-card">
              <LiaUsersCogSolid className="aboutIcon" />
              <h5>Clients</h5>
              <small>20+</small>
            </article>
            <article className="a-card">
              <AiOutlineFolderAdd className="aboutIcon" />
              <h5>Projects</h5>
              <small>60+ Completed Projects</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
