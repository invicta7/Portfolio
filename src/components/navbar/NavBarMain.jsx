import React from "react";
import NavBarLogo from "./NavBarLogo";
import NavBarLinks from "./NavBarLinks";
import NavBarBtn from "./NavBarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBarMain = () => {
  const [menuOpen, setMenuOpen] =
    useState(
      false
    ); /*declaring a useState and updating the state via setMenuOpen */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; /*A constant declaration that keeps the toggle closed unless it is clicked */
  return (
    <nav
      className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2" /*This is the Nav container that would contain all the nav components as we see below in the div. the max-width is defined in the className as seen above with a value of 1300px the margin of the x-axis is set to zero to centralize it, padding in the x-axis is 4 which is a horizontal spacing equal on both the right and left side, width is set to full to occupy the full width and it is fixed with a left of 50% and translating thhe x-axis to - 50% more like a negative translation, it is flexed with a z-20 to keep it above, a margin-top of 2 to give a space from above and a gap of 4 to seperate the components. */
    >
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-[#1e1917] items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavBarLogo />
        <div
          className={`${
            menuOpen ? "sm:block" : "sm:hidden"
          } lg:block`} /*Here we put the Navlinks in a div and give it a className where we pass a template literal with a javaScript tenary option to tell us that if MenuOpen is clicked display the links as block in small screens else keep the links hidden in small screens until clicked. there is also an option for large screen to keep the navlink display as block(This is written outside the tenary). Now move on to NavLinks.jsx to add responsiveness for lg and sm */
        >
          <NavBarLinks />
        </div>

        <NavBarBtn />
      </div>
      <div
        className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange" /*This is to create a toggle menu which we imported from react-icons and styled using the above className */
      >
        <button
          className="text-2xl p-3 border border-orange rounded-full text-[#fff]"
          onClick={
            toggleMenu
          } /*The onclick carries a prop toggleMenu which has been initially declared as const */
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavBarMain;
