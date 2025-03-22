import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavBarBtn = () => {
  return (
    <button
      className="px-4 py-2 rounded-full text-xl font-bold text-[#fff] border-cyan border flex items-center gap-1 bg-gradient-to-r from-[#15d1e9] to-[#fb9718] hover:border-[#fb9718] hover:scale-110 transition-all duration-800 hover:shadow-cyanShadow" /*This is a button component that has its border rounded, a padding on the x and y axis that corresponds to the spacing on the horizontal axis (left and right) and vertical axis(up and down or top and bottom, font character, size and text color is set to bold, xl and white respectively, it is flexed and items centralized, a background gradient is defined to change the color from cyan to orange as we move to the right edge of the button, a hover is also defined for the color and a scale on hover to increase the size by 10% and set shadow on hover to cyanShawdon defined in tailwindcss config) */
    >
      Hire Me
      <div
        className="sm:hidden md:block" /*this is to hide the arrowdownright button on small screens */
      >
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavBarBtn;
