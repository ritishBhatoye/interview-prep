import { searchFilterOptions } from "@/constants/dummyData/SearchJob";
import { SearchFilterDataType } from "@/types/searchJob";
import React from "react";

const SearchFilter = () => {
  return (
    <div className="flex flex-col items-start gap-5 bg-custom-gradient p-5 rounded-3xl">
      <h1 className="text-medium text-2xl">Filter </h1>

      <div className="">
        {searchFilterOptions.map((filter: SearchFilterDataType) => (
          <div key={filter.id} className="flex flex-col items-start gap-6 py-2">
            <p className="text-xl font-normal">{filter.label}</p>
            {filter.options.map((option: string, index: number) => (
              <div key={index} className="flex flex-col items-start">
                <div className="flex flex-row gap-4 items-center justify-between">
                  <input type="checkbox" className="size-4" color="#4C1D95" />
                  <p className="text-base font-medium text-white">{option}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
