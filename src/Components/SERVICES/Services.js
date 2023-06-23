import React from "react";
import "./Services.css";
import { BiCheckCircle } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
           
          </ul>
        </article>

        {/* END OF WEBDESIGN  */}

        <article className="service">
          <div className="service_head">
            <h3>Software Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nisi autem.
              </p>
            </li>
        
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
