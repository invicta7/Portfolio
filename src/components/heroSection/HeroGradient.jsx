import React from "react";

const HeroGradient = () => {
  return (
    <div>
      <div className="absolute top-0 right-[400px] -z-10 animate-pulse shadow-[10px_10px_200px_150px_rgba(94,206,220,0.5)]"></div>
      <div className="absolute top-0 right-0 -z-10 animate-pulse shadow-[10px_10px_200px_150px_rgba(240,169,79,0.5)]"></div>
      <div className="shadow-[10px_10px_200px_150px_rgba(94,206,220,0.5)] absolute top-[300px] left-0 -z-10 opacity-50"></div>
      <div
        className="shadow-[10px_10px_200px_150px_rgba(240,169,79,0.5)] absolute top-[500px] left-0 -z-10 opacity-50" /*All the above in their respective divs define the gradients on the page from here your go to app.jsx and import this heroGRADIENT*/
      ></div>
    </div>
  );
};

export default HeroGradient;
