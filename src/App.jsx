import React from "react";
import NavBarMain from "./components/navbar/NavBarMain";
import HeroMain from "./components/HeroSection/HeroMain";
import HeroGradient from "./components/HeroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
    </main>
  );
}

export default App;
