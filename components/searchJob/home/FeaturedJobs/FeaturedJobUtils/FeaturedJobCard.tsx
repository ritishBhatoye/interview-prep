import React from "react";
import Image from "next/image";

import { FeatureCardDataType } from "@/types/searchJob";

interface props {
  featureJob: FeatureCardDataType;
}

const FeaturedJobCard = ({ featureJob }: props) => {
  return (
    <div className="flex flex-col p-5 bg-custom-gradient rounded-4xl">
      <div className="flex flex-row justify-between items-start">
        <Image
          src={featureJob.logo}
          alt={featureJob.company}
          height={50}
          width={50}
        />
        <span className="rounded-3xl  p-4 border bg-ocean-blue-500/20 border-ocean-blue-500/30">
          <p className="text-base font-normal">Full Time</p>
        </span>
      </div>
      <div className="flex flex-col gap-5 items-start">
        <p className="text-lg font-semibold bg-gradient-to-br from-sunset-orange-500 via-fluxx to-cyber-mint-500">
          {featureJob.jobRole}
        </p>
        <div className="flex flex-row gap-2 items-center">
          <p className="font-normal text-base">{featureJob.company}</p>
          <p className="rounded-full bg-[#515B6F] p-0.5" />
          <p className="font-normal text-base">{featureJob.location}</p>
        </div>
        <p className="text-base font-normal">{featureJob.companyDescription}</p>

        <div className="flex flex-row gap-2 flex-wrap">
          {featureJob.tags.map((tag: string, index: number) => (
            <span
              className={`px-3 py-2 rounded-full border ${
                index == 0
                  ? "bg-ocean-blue-500/20 border-ocean-blue-500/30"
                  : index == 1
                  ? "bg-fluxx/20 border-fluxx/30"
                  : index == 2
                  ? "bg-cyber-mint-500/20 border-cyber-mint-500/30"
                  : index == 3
                  ? "bg-sunset-orange-500/20 border-sunset-orange-500/30"
                  : "bg-green-shimmer/20 border-green-shimmer/30"
              }`}
              key={index}
            >
              <p
                className={`${
                  index == 0
                    ? "text-ocean-blue-200"
                    : index == 1
                    ? "text-fluxx"
                    : index == 2
                    ? "text-cyber-mint-200"
                    : index == 3
                    ? "text-sunset-orange-200"
                    : "text-green-shimmer"
                }`}
              >
                {tag}
              </p>
            </span>
          ))}
        </div>
        <p className="text-2xl font-medium p-3 rounded-full">
          {featureJob.salary}
        </p>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
