import React from "react";

const NavBarLogo = () => {
  return (
    <div>
      <h1
        className="text-white text-2xl sm:hidden md:block lg:block" /*Here we make the Logo responsive by creating another h1 element with VI and className to be block on small screen and hidden on medium and large screen. we also display the full Name as block on medium and large screen and hidden on small screens */
      >
        Victor Iriemi
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden">
        VI
      </h1>
    </div>
  );
};

export default NavBarLogo;
