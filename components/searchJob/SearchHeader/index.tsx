"use client";

import CustomRangeSlider from "@/components/ui/CustomRangeSlider";
import { Input } from "@/components/ui/input";
import {
  BriefcaseIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SearchHeader = () => {
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 1200]);

  return (
    <div className="w-full root-layout">
      <nav className="flex flex-col lg:flex-row justify-between items-center gap-6 bg-white/10 hover:bg-white/20 rounded-3xl p-4 transition-all">
        <div className="flex items-center gap-3 w-fit">
          <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          <Input
            className="!border-0 !bg-white/10 text-white placeholder:text-white/70 px-6 py-3 rounded-xl focus-visible:ring-0 w-full"
            placeholder="Search jobs..."
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-2/5">
          <div className="flex gap-3">
            <MapPinIcon className="w-10 h-10 p-2 border border-white rounded-full cursor-pointer hover:bg-white/10 transition-all" />
            <BriefcaseIcon className="w-10 h-10 p-2 border border-white rounded-full cursor-pointer hover:bg-white/10 transition-all" />
            <ClockIcon className="w-10 h-10 p-2 border border-white rounded-full cursor-pointer hover:bg-white/10 transition-all" />
          </div>

          <div className="w-full flex flex-col gap-4 justify-items-center sm:w-2/3">
            <p className="text-white text-sm mt-1 text-center">
              Salary Range: ₹{salaryRange[0]} - ₹{salaryRange[1]}
            </p>
            <CustomRangeSlider
              className="slider"
              min={0}
              max={10000}
              values={salaryRange}
              step={100}
              onChange={setSalaryRange}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchHeader;
