"use client";

import CustomRangeSlider from "@/components/ui/CustomRangeSlider";
import { Input } from "@/components/ui/input";
import { BriefcaseIcon, MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SearchHeader = () => {
  const [salary, setSalary]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);

  return (
    <div className="w-full root-layout">
      <nav className="flex justify-between flex-row items-center gap-12 bg-white/8 hover:bg-white/10 rounded-4xl p-4">
        <div className="flex flex-row items-center gap-3">
          <MagnifyingGlassIcon className="w-8 h-8" />
          <Input className="border-0" placeholder="Search typing your job search input" />
        </div>
        <div className="flex flex-row items-center gap-3">
          <MapPinIcon className="w-10 h-10 p-3 border border-white rounded-full cursor-pointer hover:opacity-75" />
          <BriefcaseIcon className="size-6 border border-white rounded-full cursor-pointer hover:opacity-75" />

          <CustomRangeSlider
            className="w-full"
            min={0}
            max={10000}
            values={[salary, 1200]}
            step={1}
          />
        </div>
      </nav>
    </div>
  );
};

export default SearchHeader;
