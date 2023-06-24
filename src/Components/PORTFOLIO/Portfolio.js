import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/one.jpg";
import IMG2 from "../../Assets/two.jpg";
import IMG3 from "../../Assets/three.jpg";
import IMG4 from "../../Assets/four.jpg";
import IMG5 from "../../Assets/five.jpg";
import IMG6 from "../../Assets/six.jpg";
import IMG7 from "../../Assets/seven.jpg";
import IMG8 from "../../Assets/eight.jpg";
import IMG9 from "../../Assets/nine.jpg";

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
            <a
              href="https://github.com/404Bappy/FitnessRevolution-APP"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://fitness-club-app-react.netlify.app"
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
          <h3>Online_Book_Shop</h3>
          <div className="pf_CTA">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://404bappy.github.io/Online_Book_Shop/"
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
          <h3>Admin-Dashboard</h3>
          <div className="pf_CTA">
            <a
              href="https://github.com/404Bappy/Admin-Dashboard"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://state-admin-dashboard.netlify.app"
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
          <h3>home-finders-app</h3>
          <div className="pf_CTA">
            <a
              href="https://github.com/404Bappy/home-finders-app"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://home-finder-app.netlify.app/"
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
          <h3>dentist-portal</h3>
          <div className="pf_CTA">
            <a
              href="https://github.com/404Bappy/dentist-portal"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://dentist-website-using-mern.netlify.app"
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
          <h3>TO-DO-List</h3>
          <div className="pf_CTA">
            <a
              href="https://github.com/404Bappy/TO-DO-List"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://my-to-do-apppp.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG7} alt="" />
          </div>
          <h3>Lighting The World Font</h3>
          <div className="pf_CTA">
            <a
              href="https://github.com/404Bappy/My-Lamp-Site"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://precious-chimera-e4ea0d.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG8} alt="" />
          </div>
          <h3>Expense Tracker App</h3>
          <div className="pf_CTA">
            <a
              href="https://github.com/404Bappy/expense-tracker-app"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://expense-tracker0000.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="pf_item">
          <div className="pf_item_img">
            <img src={IMG9} alt="" />
          </div>
          <h3>Payment-Form</h3>
          <div className="pf_CTA">
            <a
              href="https://github.com/404Bappy/Payment-Check-Out-Form"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://404bappy.github.io/Payment-Check-Out-Form/"
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
