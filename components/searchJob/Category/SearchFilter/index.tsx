import { searchFilterOptions } from "@/constants/dummyData/SearchJob";
import { SearchFilterDataType } from "@/types/searchJob";
import React from "react";

const SearchFilter = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <h1 className="text-medium text-2xl">Filter </h1>

      <div>
        {searchFilterOptions.map((filter: SearchFilterDataType) => (
          <div key={filter.id} className="flex flex-col items-start gap-5">
            <p className="text-xl font-normal">{filter.label}</p>
            {filter.options.map((option: string, index: number) => (
              <div key={index} className="flex flex-col items-start">
                <div className="flex flex-row items-center justify-between">
                  <input type="checkbox" className="" />
                  <p className="text-sm font-medium">{option}</p>
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
