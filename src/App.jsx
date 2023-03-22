import { useState } from "react";
import "./App.css";

import Community from "./components/Community";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="App">
      {/* Start Home Section */}
      <Home/>

      {/* ---- Start About Us--- */}
      <AboutUs/>
      

      {/* Start Tokenomics Section */}
      <Tokenomics/>

      {/* Start Roadmap Section */}
      <Roadmap/>

      {/* Start Community Section */}
      <Community/>

      {/* Start Footer */}
      <Footer/>
    </div>
  );
}

export default App;
