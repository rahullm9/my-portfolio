import React from "react";
import Particles from "../assets/Particles";

const HeroSection = () => {
  return (
    <div className="hero-main relative bg-black h-screen w-full flex  justify-center items-center z-0 overflow-hidden">
      {/* Background Content Boxes */}
      <div
        className="w-full h-screen"
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Center Text */}
      <div className="flex flex-col justify-center items-center  absolute z-1">
        <h1 className="hero-page-name text-8xl font-bold  text-white ">
          Rahul Mahato
        </h1>
        <h4 className="text-white  ">
          Programmer · Full-Stack Developer · Problem-Solver
        </h4>
      </div>
    </div>
  );
};

export default HeroSection;
