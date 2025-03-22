import React from "react";
import subImage from "../../assets/Subskills.jpeg";

const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightGrey relative">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      <img src={subImage} alt="Subskill image" />
    </div>
  );
};

export default SubSkills;
