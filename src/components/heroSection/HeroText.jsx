import React from "react";

const HeroText = () => {
  return (
    <div
      className="flex flex-col gap-4 h-full justify-center md:left sm:center" /*This is the container for h1, h2 and p elements, sets them as a flex column, with full height and a gap of 4 justify text to the center and for responsiveness move the text to the center and for large screen display the text on the left */
    >
      <h2
        className="lg:text-2xl sm:text-xl uppercase text-[#88e5f0]" /*This is for mobile responsiveness; on large screens increase text size and on small screen reduce text size */
      >
        Front-End Web Developer
      </h2>
      <h1
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-[#fb9718]" /*This is for responsiveness for medium screen increase text same for large screen and reduce text size for small screens, increase the font and make it special */
      >
        Victor Iriemi
      </h1>
      <p
        className="text-lg mt-4 text-white" /*Styling for the paragraph text */
      >
        A passionate and ethusiastic Web Developer
      </p>
    </div>
  );
};

export default HeroText;
