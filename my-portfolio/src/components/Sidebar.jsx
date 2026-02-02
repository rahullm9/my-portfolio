import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      id: 1,
      label: "About Me",
      path: "/about",
      color: "bg-[#black]",
      icon: <FaInfoCircle />,
    },
    {
      id: 2,
      label: "Project",
      path: "/project",
      color: "bg-[#black]",
      icon: <FaFolderOpen />,
    },
    {
      id: 3,
      label: "Home",
      path: "/",
      color: "bg-black",
      icon: <IoHome />,
    },
    {
      id: 4,
      label: "Skills",
      path: "/skills",
      color: "bg-[#black]",
      icon: <FaBrain />,
    },
    {
      id: 5,
      label: "Education",
      path: "/education",
      color: "bg-[#black]",
      icon: <IoSchoolSharp />,
    },
    {
      id: 6,
      label: "Contact",
      path: "/contact",
      color: "bg-[#black]",
      icon: <IoCall />,
    },
  ];
  return (
    <div>
      <div className="fixed  flex flex-row gap-6 z-5 bottom-4 left-1/2 -translate-x-1/2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className="group flex items-center justify-end w-12 h-12 bg-black rounded-full cursor-pointer overflow-hidden hover:w-40 transition-all duration-500 ease-in-out shadow-2xl border-2 border-white"
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

export default Sidebar;
