import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import PeakyImg from "../assets/peaky.png";

const HeroSection = () => {
  const menuItems = [
    { id: 1, label: "About", color: "bg-blue-500", icon: <FaInfoCircle /> },
    { id: 2, label: "Project", color: "bg-green-500", icon: <FaFolderOpen /> },
    { id: 3, label: "Skills", color: "bg-purple-500", icon: <FaBrain /> },
    {
      id: 4,
      label: "Education",
      color: "bg-yellow-500",
      icon: <IoSchoolSharp />,
    },
    { id: 5, label: "Contact", color: "bg-red-500", icon: <IoCall /> },
  ];

  return (
    <div className="hero-main relative bg-[#222831] h-screen w-screen flex  justify-center gap-4 z-0 overflow-hidden">
      {/* Background Content Boxes */}
      <div className="text-box h-full flex-1 rounded-xl p-7 text-white ">
        <div className="bio-text flex justify-center items-center h-full">
          <div className="bg-[#76ABAE] text-2xl font-semibold p-4 rounded-sm shadow-2xl">
            {" "}
            I'M A FULLSTACK DEVELOPER
          </div>
        </div>
      </div>
      <div className="image-box h-full flex-1 rounded-xl  bg-[#31363F] ">
        <img
          className="h-full w-full object-cover right-1 box-border"
          src={PeakyImg}
          alt="Peaky Blinder"
        />
      </div>

      {/* Center Text */}
      <h1 className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl lg:text-8xl font-bold text-white drop-shadow-lg z-10 whitespace-nowrap">
        RAHUL MAHATO
      </h1>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 items-end">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group flex items-center justify-end w-12 h-12 bg-white rounded-full cursor-pointer overflow-hidden hover:w-40 transition-all duration-500 ease-in-out shadow-2xl border-2 border-gray-200"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4 text-gray-800 font-bold whitespace-nowrap delay-100">
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
