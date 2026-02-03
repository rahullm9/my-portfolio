import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import Mssbm from "../assets/schoolImg/Mssbm.jpg";
import { MdOutlineSchool } from "react-icons/md";
import Pmm from "../assets/schoolImg/pMM.jpg";
import Dip from "../assets/schoolImg/dip.jpg";
import Sutech from "../assets/schoolImg/Surtech.jpg";

const Educations = () => {
  const schoolImgItem = [
    {
      id: 1,
      img: Mssbm,
      degree: "Secondary Education (2017)",
      name: "Manguria S.S.B.M Vidyamandir (H.S)",
      location: "Hura, Purulia, WestBengal",
      board: "West Bengal",
      locationIcon: <MdLocationOn />,
      sclIcon: <FaSchool />,
      boardIcon: <MdOutlineSchool />,
    },
    {
      id: 2,
      img: Pmm,
      degree: "Higher Secondary Education(2019)",
      name: "Purulia M.M High School",
      location: "Purulia, WestBengal",
      board: "West Bengal",
      locationIcon: <MdLocationOn />,
      sclIcon: <FaSchool />,
      boardIcon: <MdOutlineSchool />,
    },
    {
      id: 3,
      img: Dip,
      degree: "Diploma Computer Science",
      name: "Durgapur Institute of Polytechnic",
      location: "Bardhawan, WestBengal",
      board: "West Bengal",
      locationIcon: <MdLocationOn />,
      sclIcon: <FaSchool />,
      boardIcon: <MdOutlineSchool />,
    },
    {
      id: 4,
      img: Sutech,
      degree: "Btech Computer Science(2026)",
      name: "Surtech",
      location: "Nort 24 Parganas, WestBengal",
      board: "West Bengal",
      locationIcon: <MdLocationOn />,
      sclIcon: <FaSchool />,
      boardIcon: <MdOutlineSchool />,
    },
  ];

  return (
    <div className="bg-black text-white w-full h-screen flex justify-center items-center gap-6">
      {schoolImgItem.map((item) => (
        <div
          key={item.id}
          className=" flex flex-col justify-center items-center gap-3 rounded-lg p-2 backdrop-blur-md border border-white/20
                   transition-all duration-300
                   hover:shadow-[0_0_20px_#8a2be2]"
        >
          <img
            src={item.img}
            alt="School"
            className="w-80 rounded-lg border border-gray-600 aspect-[4/3] object-cover"
          />
          <div className="p-2 flex flex-col">
            <span className="text-xl font-bold">{item.degree}</span>
            <div className="flex flex-row gap-2  items-center">
              <span>{item.sclIcon}</span>
              <span>{item.name}</span>
            </div>
            <div className="flex flex-row gap-2  items-center">
              {" "}
              <span>{item.boardIcon}</span>
              <span>Board : {item.board}</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <span>{item.locationIcon}</span>
              <span>{item.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Educations;
