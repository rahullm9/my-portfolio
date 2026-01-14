import React from "react";
import Particles from "../assets/Particles";

const HeroSection = () => {
  return (
    <div className="hero-main relative bg-[#070F2B] h-screen w-full flex  justify-center items-center z-0 overflow-hidden">
      {/* Background Content Boxes */}
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
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
        <h1 className="text-8xl font-bold  text-white ">WEB DEVELOPER</h1>
        <h4 className="text-white pr-40 pl-40 mt-4">
          I’m a Full-Stack Web Developer who enjoys turning ideas into
          functional, responsive web applications. I work across both frontend
          and backend, building clean UIs, robust APIs, and scalable systems.
          I’m passionate about learning, problem-solving, and crafting
          meaningful digital experiences.
        </h4>
      </div>
    </div>
  );
};

export default HeroSection;
