import React from 'react'


import phase1png from "../assets/Roadmap/phase_1.png";
import phase2png from "../assets/Roadmap/phase_2.png";
import phase3png from "../assets/Roadmap/phase_3.png";
import phase4png from "../assets/Roadmap/phase_4.png"; 
import Card from './Common/Card';

const Roadmap = () => {
  return (
    <div className={`w-full bg-right-bottom bg-no-repeat overflow-hidden bg-pink-100 bg-sakuraroadmap bg-[length:600px_900px] `}
        id="roadmap">
        <div className="md:grid md:grid-cols-3 lg:-pt-32">
          <div className="flex justify-end pt-5 lg:pt-20"></div>
          <div className="flex justify-center pt-20">
            <h1 className="font-bold text-Subject bold md:text-4xl xl:text-6xl mx-7 text-2xl" style={{ fontSize: "64px", letterSpacing: "-4%" }}>
              Roadmap
            </h1>
          </div>
        </div>
        <div className="md:grid md:grid-flow-col auto-cols-max gap-x-7 px-10 lg:justify-center mt-28 mb-72 text-xs ">


          <Card
            title={"Phase 1"}
            image={phase1png}
            subtitle={"Launch"}
          />
          <Card
            title={"Phase 2"}
            image={phase2png}
            subtitle={"Launch"}
          />
          <Card
            title={"Phase 3"}
            image={phase3png}
            subtitle={"Launch"}
          />
          <Card
            title={"Phase 4"}
            image={phase4png}
            subtitle={"Launch"}
          />

        </div>
      </div>
  )
}

export default Roadmap
