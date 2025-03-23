import React from "react";
import { MdOutlineCircle } from "react-icons/md";
import heroPicImage from "../../assets/vIriemi.jpeg";

const HeroPic = () => {
  return (
    <div
      className="h-full flex items-center justify-center" /*this allows items occupy the full height of the herosection */
    >
      <img
        src="src/assets/vIriemi.jpeg"
        alt="image"
        className="h-[450px] w-[450px] rounded-full object-cover" /*This displays the image with a rounded border and allows image to occupy the rounded border */
      />
      <div
        className="absolute -z-10 flex justify-center items-center animate-pulse" /*This div creates an animation effect as outlined by the className for the outlined circle hovering around the image displayed */
      >
        <MdOutlineCircle
          className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-[#88e5f0] blur-md animate-[spin_20s_linear_infinite]" /*This makes the outline circle to spin, the text changes the color from its initial black color to cyan on the wheel, there is also mobile responsiveness for various screen sizes */
        />
      </div>
    </div>
  );
};

export default HeroPic;
