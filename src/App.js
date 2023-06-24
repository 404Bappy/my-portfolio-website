import React from "react";
import About from "./Components/ABOUT/About";
import Contact from "./Components/CONTACT/Contact";
import Experience from "./Components/EXPERIENCE/Experience";
import Footer from "./Components/FOOTER/Footer";
import Header from "./Components/HEADER/Header";
import Navbar from "./Components/NAV_BAR/Navbar";
import Portfolio from "./Components/PORTFOLIO/Portfolio";
import Services from "./Components/SERVICES/Services";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
