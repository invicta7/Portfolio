import React from "react";

const SingleSkill = ({
  imgSvg,
  text,
}) /*passing imgSvg and text as props from AllSkills.jsx */ => {
  return (
    <div
      className="hover:-translate-y-10 transition-all duration-500" /*Allows the skillitems to bounce to a vertical height of 10 on hovering */
    >
      <div
        className="flex flex-col items-center gap-2 relative" /*A div to put all skillitem in a flex container */
      >
        <div
          className="bg-[#fff] text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange" /*A div for the react icons image and text changing the image to gray on hovering and increasing the icon size */
        >
          {imgSvg}
        </div>
        <p className="text-[#ffff] font-bold">{text}</p>
      </div>
      <div
        className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10" /*A div for the orange pillars supporting the icons */
      ></div>
    </div>
  );
};

export default SingleSkill;
