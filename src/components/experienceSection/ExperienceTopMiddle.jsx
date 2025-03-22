import React from "react";
import experienceImage from "../../assets/experience-image.png";

const ExperienceTopMiddle = () => {
  return (
    <div
      className="lg:w-[35%] md
    w-[50%] sm:w-[80%]"
    >
      <img src={experienceImage} alt="experience-image" />
    </div>
  );
};

export default ExperienceTopMiddle;
