import React from "react";
import Mypic from "../assets/myphoto.jpg";
import { FaHeadphones } from "react-icons/fa";
import { TbMotorbike } from "react-icons/tb";
import { MdLocalMovies } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";

const About = () => {
  const intrestItem = [
    {
      id: 1,
      color: "bg-[#8a2be2]",
      icon: <FaHeadphones />,
      label: "Music",
    },
    {
      id: 2,
      color: "bg-[#8a2be2]",
      icon: <TbMotorbike />,
      label: "Travel",
    },
    {
      id: 3,
      color: "bg-[#8a2be2]",
      icon: <MdLocalMovies />,
      label: "Movie",
    },
    {
      id: 4,
      color: "bg-[#8a2be2]",
      icon: <IoIosColorPalette />,
      label: "Art",
    },
  ];
  return (
    <div className="main-about w-screen h-screen bg-black">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-6xl p-8 text-white marck-script-regular ">
          About Me
        </h1>
      </div>
      <div className="text-white flex flex-row ">
        <div className="w-1/3">
          <img className="" src={Mypic} alt="profile picture" />
        </div>
        <div className="w-2/3 pl-10 pr-40 ">
          <h2 className="text-4xl text-[#8a2be2] font-bold molle-regular-italic ">
            Rahul Mahato
          </h2>
          <p className="font-bold mt-2">Full Stack/ Programmer</p>
          <p className=" mt-6 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            magnam ratione nostrum odit aut molestiae harum dignissimos iure
            maiores veniam, laboriosam ipsam voluptatum dolorum excepturi alias
            dolores delectus doloribus adipisci. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aut porro aliquid itaque, animi ea
            facilis obcaecati repellendus commodi provident incidunt adipisci
            atque dolores consequuntur dicta eveniet similique error officia
            dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet aliquam hic alias corrupti? Recusandae inventore dolor
            natus, assumenda eveniet hic tenetur dolores corporis dolore aliquid
            ipsam cupiditate rem modi consequuntur.
          </p>
          <div className="flex flex-row gap-4 mt-10">
            <button
              className="border-2 p-2 rounded
             transition-all duration-500 ease-out
             hover:bg-[#8a2be2] hover
             hover:-translate-y-1 hover:shadow-lg"
            >
              Download CV
            </button>

            <button
              className="relative rounded px-4 py-2 text-white
                   bg-white/10 backdrop-blur-md border border-white/20
                   transition-all duration-300
                   hover:shadow-[0_0_20px_#8a2be2]"
            >
              Hire Me
            </button>
          </div>
          <div className="flex mt-6 flex-col bg-amber-300">
            <h1 className="text-white text-4xl  marck-script-regular underline">
              My Hobbies
            </h1>
            <div className="flex flex-row gap-6 mt-6 ">
              {intrestItem.map((item) => (
                <div key={item.id}>
                  <span className="flex flex-row">{item.label}</span>
                  <div className={"${item.color}"}>
                    <span>{item.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
