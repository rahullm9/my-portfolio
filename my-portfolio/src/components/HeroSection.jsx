import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Particles from "../assets/Particles";

const HeroSection = () => {
  const menuItems = [
    { id: 1, label: "About", color: "bg-[#535C91]", icon: <FaInfoCircle /> },
    { id: 2, label: "Project", color: "bg-[#535C91]", icon: <FaFolderOpen /> },
    { id: 3, label: "Skills", color: "bg-[#535C91]", icon: <FaBrain /> },
    {
      id: 4,
      label: "Education",
      color: "bg-[#535C91]",
      icon: <IoSchoolSharp />,
    },
    { id: 5, label: "Contact", color: "bg-[#535C91]", icon: <IoCall /> },
  ];

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
        <h4 className="text-white">I'm a Full Stack web developer</h4>
      </div>

      {/* *****************-------sidebar----------*************** */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 items-end">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group flex items-center justify-end w-12 h-12 bg-[#1B1A55] rounded-full cursor-pointer overflow-hidden hover:w-40 transition-all duration-500 ease-in-out shadow-2xl border-2 border-[#9290C3]"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4 text-white font-bold whitespace-nowrap delay-100">
              {item.label}
            </span>

            <div
              className={`w-12 h-12 flex justify-center items-center shrink-0 rounded-full text-white ${item.color}`}
            >
              <span className="text-xl">{item.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
