"use client";

import { motion, AnimatePresence } from "framer-motion";

import {
  ResumeAnalysisReviewTabScreenData,
  ResumeAnalysisReviewTabsData,
} from "@/types/resumeAnalysis/dummyData/resumeAnalysis";
import React, { useState } from "react";
import ResumeAnalysisTabScreen from "./ResumeAnalysisReviewUtils/ResumeAnalysisTabScreen";

const ResumeAnalysis = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState(ResumeAnalysisReviewTabsData[0].value);

  return (
    <div className="flex flex-col">
      {/* Tabs Container */}
      <div className="flex flex-wrap gap-4  max-w-7xl mx-auto rounded-xl">
        {ResumeAnalysisReviewTabsData.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.value)}
            className={`px-7 py-4  cursor-pointer transition-all duration-300 ${
              activeTab === tab.value
                ? " font-semibold bg-gradient-to-tl  rounded-t-full from-blue-500/100 to-blue-900/30 duration-200  border-white/10  text-white shadow-lg"
                : " text-primary-100  bg-gradient-to-tl border-white/10 hover:from-blue-800/50 hover:to-blue-900/30 "
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {activeTab === "instant-resume-review" && (
          <motion.div
            key="instant-review"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ResumeAnalysisTabScreen
              ResumeAnalysisTabScreenData={ResumeAnalysisReviewTabScreenData[0]}
            />
          </motion.div>
        )}

        {activeTab === "resume-samples" && (
          <motion.div
            key="resume-samples"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ResumeAnalysisTabScreen
              ResumeAnalysisTabScreenData={ResumeAnalysisReviewTabScreenData[1]}
            />
          </motion.div>
        )}

        {activeTab === "resume-targeting" && (
          <motion.div
            key="resume-targeting"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ResumeAnalysisTabScreen
              ResumeAnalysisTabScreenData={ResumeAnalysisReviewTabScreenData[2]}
            />
          </motion.div>
        )}

        {activeTab === "linkedin-optimization" && (
          <motion.div
            key="linkedin-optimization"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ResumeAnalysisTabScreen
              ResumeAnalysisTabScreenData={ResumeAnalysisReviewTabScreenData[3]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeAnalysis;
