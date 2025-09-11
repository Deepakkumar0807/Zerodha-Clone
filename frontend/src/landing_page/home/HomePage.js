import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <div className="container-fluid" style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      
    </div>
  );
}

export default HomePage;
