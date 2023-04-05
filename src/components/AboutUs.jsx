import React from 'react'

import aboutpng from "../assets/About/about.png";

const AboutUs = () => {
    const aboutUsText = [
        "Niziru means desire. Therefore, Niziru means someone who is tenacious and never gives up compared to others, and he always seeks perfection in what he wants. Niziru is a community-build, Web3 and growth tools for \"meme coin\" Niziru believes that \"Build on Decentralization\" will make it easier for the community to get the best quality in using Web3. in this case we will receive opinions and innovations from the community for make better product on Niziru."
      ];
  return (
    <div
      class="w-full bg-left-bottom bg-no-repeat overflow-hidden bg-pink-50 bg-sakura3"
        id="aboutus"
      >
        <div className="md:grid md:grid-cols-2 lg:-ml-32 mb-12">
          <div className="lg:flex lg:justify-center  lg:ml-40 lg:pt-40">
            <img src={aboutpng} className="w-533.33 h-400 shadow-pink-200" />
          </div>
          <div className="pt-5 lg:pt-72">
          <h1 className="font-bold text-Subject bold md:text-4xl xl:text-6xl mx-7 text-2xl" style={{ fontSize: "64px", letterSpacing: "-4%" }}>
            About us
            </h1>
            <p className="text-gray-400 w-3/4 m-7 font-inter text-left" style={{ fontSize: "16px", lineHeight: "24px" }}>{aboutUsText[0]}
            </p>
          </div>
        </div>
      </div>
  )
}

export default AboutUs