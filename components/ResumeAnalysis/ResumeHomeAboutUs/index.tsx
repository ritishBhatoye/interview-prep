import React from "react";

import InfoCard from "@/components/elements/InfoCard";
import { ResumeAnalysisHomeAboutUsData } from "@/types/resumeAnalysis/dummyData/resumeAnalysis";
import { SectionDataType } from "@/types";

const ResumeHomeAboutUs = () => {
  return (
    <div className="bg-gradient-to-tl from-[#4C1D95] to-blue-[#C3A9FF]/100  duration-200">
      {ResumeAnalysisHomeAboutUsData.map((AboutUs: SectionDataType) => (
        <InfoCard
          key={AboutUs.id}
          title={AboutUs.title}
          subTitle={AboutUs.subTitle}
          description={AboutUs.description}
          imgSrc={AboutUs.imgSrc}
          className="max-w-7xl mx-auto p-5 py-10"
          containerWithImageClassName={`${AboutUs.id == 2 ? "grid grid-cols-2" : "grid grid-cols-2"} gap-4 w-full items-center justify-between`}
          dir={`${AboutUs.id == 2 ? "rtl" : "ltr"}`}
          ctaLabel={AboutUs.id !== 2 ? AboutUs.ctaLabel : ""}
          sectionClassName="items-start"
          ctaClassName={AboutUs.id !== 2 ? "p-5 py-6 bg-ocean-blue-500" : "bg"}
        />
      ))}
    </div>
  );
};

export default ResumeHomeAboutUs;
