import React from "react";
import mypfp from "../HeroSection/mypfp.png";

const HeroSection = () => {
  return (
    <div className="hero flex flex-row">
      <div className="content-section">
        <h1 className="leading-none">WEB DEVELOPER</h1>
        <p className="text-lg flex flex-start">
          Hello Myself{" "}
          <span className="font-bold text-emerald-700"> -Rahul- </span> and I am
          a Web Developer
        </p>
        <p className="text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          atque.
        </p>
      </div>
      <div className="image-section flex align-center justify-center">
        <img src={mypfp} alt="image" className="text-lg" />
      </div>
    </div>
  );
};

export default HeroSection;
