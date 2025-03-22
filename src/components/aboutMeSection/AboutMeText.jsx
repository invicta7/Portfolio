import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-[#fff]">
        I am Dr. Iriemi, a web developer and medical doctor with a deep passion
        for coding. Specializing in React and front-end development, I use my
        expertise to solve real-world challenges by building interactive and
        intuitive applications. As an avid reader and lifelong learner, I am
        committed to continuous growth and sharing knowledge to inspire both
        myself and others to reach new heights of achievement.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm-self-center text-[#fff] hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
