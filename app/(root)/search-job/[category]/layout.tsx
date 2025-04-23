import SearchFilter from "@/components/searchJob/Category/SearchFilter";
import SearchHeader from "@/components/searchJob/SearchHeader";
import React from "react";

const CategoryLayout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="w-full">
      <SearchHeader />
      <div className="w-10/12 2xl:w-9/12 max-w-screen-2xl mx-auto px-4 flex flex-row items-start justify-between gap-8">
        <div className="w-1/4 overflow-y-scroll h-screen rounded-3xl hide-scrollbar">
          <SearchFilter />
        </div>
        <div className="flex flex-col items-start w-3/4">{children}</div>
      </div>
    </div>
  );
};

export default CategoryLayout;
