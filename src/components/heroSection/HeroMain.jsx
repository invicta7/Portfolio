import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div
        className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 pt-2" /* this div houses the HeroText and Pic and also carry responsiveness for medium and small screen */
      >
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
