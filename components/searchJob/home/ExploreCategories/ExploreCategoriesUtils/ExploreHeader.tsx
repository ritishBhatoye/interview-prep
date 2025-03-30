import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const ExploreHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-5xl font-semibold">
        {" "}
        Explore by{" "}
        <span className="text-blue-500 hover:text-blue-600 hover:shadow-2xl">
          Category
        </span>
      </h1>
      <div className="flex flex-row gap-5 items-center">
        <p className="text-base text-blue-500 hover:text-blue-600">
          Show all jobs
        </p>
        <ArrowRightIcon className="h-6 w-6 text-blue-500 hover:text-blue-600" />
      </div>
    </div>
  );
};

export default ExploreHeader;
