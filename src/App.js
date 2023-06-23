import React from "react";
import About from "./Components/ABOUT/About";
import Contact from "./Components/CONTACT/Contact";
import Experience from "./Components/EXPERIENCE/Experience";
import Header from "./Components/HEADER/Header";
import Navbar from "./Components/NAV_BAR/Navbar";
import Services from "./Components/SERVICES/Services";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Contact />
    </>
  );
}

export default App;
