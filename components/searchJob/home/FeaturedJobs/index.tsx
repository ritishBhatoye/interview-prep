import { featureJobData } from "@/helpers/searchJob";
import React from "react";
import FeaturedJobCard from "./FeaturedJobUtils/FeaturedJobCard";
import { SectionHeader } from "@/components/elements/SectionHeader";

const FeaturedJobs = () => {
  return (
    <div className="flex flex-col items-start gap-5 mt-5 md:mt-6 lg:mt-7 w-full">
      <SectionHeader title="Featured" />
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featureJobData.map((feature) => (
          <FeaturedJobCard key={feature.id} featureJob={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
