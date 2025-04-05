import React from "react";

import Image from "next/image";

import { ResumeAnalysisReviewTabViewDataType } from "@/types";
import { Button } from "@/components/ui/button";

interface props {
  ResumeAnalysisTabScreenData: ResumeAnalysisReviewTabViewDataType;
}

const ResumeAnalysisTabScreen = ({ ResumeAnalysisTabScreenData }: props) => {
  return (
    <div className="flex flex-row items-center">
      <Image src={ResumeAnalysisTabScreenData.image} width={10} height={10} alt="W" />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-primary-100">
            {ResumeAnalysisTabScreenData.title}
          </h1>
          <p className="text-xl font-normal text-white"> {ResumeAnalysisTabScreenData.subTitle}</p>
        </div>
        <Button className="bg-ocean-blue-500 p-4">
          <p className="text-white font-medium ">{ResumeAnalysisTabScreenData.ctaLabel}</p>
        </Button>
      </div>
    </div>
  );
};

export default ResumeAnalysisTabScreen;
