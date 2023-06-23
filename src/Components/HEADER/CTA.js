import React from "react";
import cv from "../../Assets/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Lest's Talk</a>
    </div>
  );
};

export default CTA;
