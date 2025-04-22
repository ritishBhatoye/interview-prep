import { Input } from "@/components/ui/input";
import { BriefcaseIcon, MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <MagnifyingGlassIcon className="w-5 h-4" />
        <Input className="border-0" placeholder="Search typing your job search input" />
      </div>
      <div className="flex flex-row items-center">
        <MapPinIcon className="w-5 h-5 border border-white rounded-full cursor-pointer hover:bg-opacity-50" />
        <BriefcaseIcon className="w-5 h-5 border border-white rounded-full cursor-pointer hover:bg-opacity-50" />
      </div>
    </div>
  );
};

export default SearchHeader;
