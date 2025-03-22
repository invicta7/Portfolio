import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Front-end Developer",
    company: "SAILS",
    date: "2024 - present",
    responsibilities: [
      "Implementing reusable components",
      "Participating in large scale application",
      "Working on performance of web applications",
      "Generating new ideas for better user experience",
    ],
  },

  {
    job: "Front-end Developer",
    company: "SAILS",
    date: "2024 - present",
    responsibilities: [
      "Implementing reusable components",
      "Participating in large scale application",
      "Working on performance of web applications",
      "Generating new ideas for better user experience",
    ],
  },

  {
    job: "Front-end Developer",
    company: "SAILS",
    date: "2024 - present",
    responsibilities: [
      "Implementing reusable components",
      "Participating in large scale application",
      "Working on performance of web applications",
      "Generating new ideas for better user experience",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" /> /*This is a tenary operator to display the arrow if index < 2 */
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
