import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import ExperienceTopLeft from "./ExperienceTopLeft";
import AllExperience from "./AllExperience";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <ExperienceText />
      <ExperienceTop />
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllExperience />
    </div>
  );
};

export default ExperienceMain;
