import React from "react";
import MvsnImg from "../assets/schoolImg/mvsn.jpg";

const Educations = () => {
  const schoolImgItem = [
    {
      id: 1,
      img: <MvsnImg />,
    },
  ];
  return (
    <div className="bg-black text-white w-full h-screen">
      <div>
        {schoolImgItem.map((item) => (
          <div key={item.id}>
            <img className={`${item.img}`} src={`${item.img}`} alt="" />
            hello
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
