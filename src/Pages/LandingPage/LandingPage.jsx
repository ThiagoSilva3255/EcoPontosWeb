import React from "react";
import "../LandingPage/StyleLandingPage.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import SectionPrimary from "../../Components/Section-primary/SectionPrimary";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <HeroSection />
      <SectionPrimary />
    </div>
  );
};

export default LandingPage;
