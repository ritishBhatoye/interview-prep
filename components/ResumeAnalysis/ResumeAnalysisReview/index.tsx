"use client";

import { ResumeAnalysisReviewTabsData } from "@/types/resumeAnalysis/dummyData/resumeAnalysis";
import React, { useState } from "react";

const ResumeAnalysis = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState(ResumeAnalysisReviewTabsData[0].value);

  return (
    <div className="flex flex-col w-full gap-8">
      {/* Tabs Container */}
      <div className="flex flex-wrap gap-4 p-4 bg-gradient-to-r from-ocean-blue-500/20 to-green-shimmer/20 rounded-xl">
        {ResumeAnalysisReviewTabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.value)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === tab.value
                ? "bg-gradient-to-r from-ocean-blue-500 to-green-shimmer text-white shadow-lg"
                : "bg-white/10 text-gray-200 hover:bg-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className="p-6 bg-gradient-to-r from-grey-matte-100 to-grey-matte-200 rounded-xl min-h-[400px]">
        {/* Instant Resume Review Content */}
        {activeTab === "instant-resume-review" && (
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Instant Resume Review</h2>
            <p>Content for instant resume review...</p>
          </div>
        )}

        {/* Resume Samples Content */}
        {activeTab === "resume-samples" && (
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Resume Samples</h2>
            <p>Content for resume samples...</p>
          </div>
        )}

        {/* Resume Targeting Content */}
        {activeTab === "resume-targeting" && (
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Resume Targeting</h2>
            <p>Content for resume targeting...</p>
          </div>
        )}

        {/* LinkedIn Optimization Content */}
        {activeTab === "linkedin-optimization" && (
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">LinkedIn Optimization</h2>
            <p>Content for LinkedIn optimization...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalysis;
