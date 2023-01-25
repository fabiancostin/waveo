import React from "react";
import Navbar from "../components/navbar/Navbar.js";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Pricing from "../components/pricing/Pricing.js";
import Socials from "../components/socials/Socials.js";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero text={"Finish your song."} />
      <About />
      <Pricing />
      <Socials />
    </>
  );
}

export default Homepage;
