import React from "react";
import NavBarMain from "./components/navbar/NavBarMain";
import HeroMain from "./components/HeroSection/HeroMain";
import HeroGradient from "./components/HeroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <HelperSection />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
    </main>
  );
}

export default App;
