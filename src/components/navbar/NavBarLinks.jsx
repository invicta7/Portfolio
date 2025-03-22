import React from "react";
const links = [
  { link: "About me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Experience", section: "experience" },
  {
    link: "Contact",
    section: "contact",
  } /* declare links as an array as above and return each links as a list via mapping method shown below passing a key of index as props */,
];
const NavBarLinks = () => {
  return (
    <ul
      className="text-white flex gap-6 font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-[#88e5f0]/30 backdrop-blur-lg lg:bg-[#1e1917] sm:w-full py-4" /*Here we make the navlinks responsive by setting flex to col on small screens and flex to row on large screens. we also make the links absolute on small screen so as not to affect the components in the nav container. Also we have to change the font-size and character on small and large screen and also the background on small screen to cyan with an opacity of 30. we also add a backdrop blur which is black for large screen and have the width of the blur to full with a padding top and bottom (y-axis) as 4 now move to NavLogo and make it responsive */
    >
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <a
              href="#"
              className="cursor-pointer text-[#fff] hover:text-[#88e5f0] transition-all duration-500" /*for color change on hover*/
            >
              {link.link}
            </a>
            <div
              className="mx-auto bg-[#88e5f0] w-0 group-hover:w-full h-[1px] transition-all duration-500" /*for underline effect here we have to create an empty div to carry out this effect with the above className*/
            ></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarLinks;
