import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },

  {
    skill: "CSS",
    icon: FaCss3Alt,
  },

  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },

  {
    skill: "ReactJS",
    icon: FaReact,
  },

  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
]; /*importing the various icons from react-icons and creating an array so i can map through the array and return each as a SingleSkill */

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
