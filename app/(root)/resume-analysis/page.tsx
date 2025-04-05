import React from "react";

import HeroSection from "@/components/ResumeAnalysis/HeroSection";
import ResumeAnalysis from "@/components/ResumeAnalysis/ResumeAnalysisReview";
import AccelerateCareer from "@/components/ResumeAnalysis/AccelerateCareer";
import GetInTouch from "@/components/ResumeAnalysis/GetInTouch";

const ResumeAnalysisPage = () => {
  return (
    <div>
      <HeroSection />
      <ResumeAnalysis />
      <AccelerateCareer />
      <GetInTouch />
    </div>
  );
};

export default ResumeAnalysisPage;
