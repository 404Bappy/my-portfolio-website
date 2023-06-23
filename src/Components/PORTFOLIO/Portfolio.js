import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/one.jpg";
import IMG2 from "../../Assets/two.jpg";
import IMG3 from "../../Assets/three.jpg";
import IMG4 from "../../Assets/four.jpg";
import IMG5 from "../../Assets/five.jpg";
import IMG6 from "../../Assets/six.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Reccent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG1} alt="" />
          </div>
          <h3>FitnessRevolution-APP</h3>
          <div className="pf_CTA">
            <a href="https://github.com/404Bappy/FitnessRevolution-APP" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://netlify.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG2} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="pf_CTA">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://netlify.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG3} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="pf_CTA">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://netlify.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG4} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="pf_CTA">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://netlify.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG5} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="pf_CTA">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://netlify.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG6} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className="pf_CTA">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://netlify.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
