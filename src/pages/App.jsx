import { useState } from "react";
import Community from "../components/Community";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics";
import AboutUs from "../components/AboutUs";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function App() {
  
  return (
    <div className="App">
      {/* Start Home Section */}
      <Header/>

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
