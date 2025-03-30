import React from "react";

import Image from "next/image";
import { exploreCategoryDataType } from "@/types/searchJob";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface props {
  categories: exploreCategoryDataType;
}

const ExploreCategoriesCard = ({ categories }: props) => {
  return (
    <div className="flex cursor-pointer hover:bg-white/20 duration-150 flex-col items-start gap-5 p-4 border border-gray-500 rounded-md">
      <Image src={categories.icon} width={35} height={35} className="" alt="" />

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">{categories.category}</h1>
        <div className="flex flex-row items-center gap-2">
          <p className="text-white/30 text-lg font-normal">
            {categories.totalJobs} jobs available
          </p>
          <ArrowRightIcon className="w-6 h-6 cursor-pointer text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default ExploreCategoriesCard;
