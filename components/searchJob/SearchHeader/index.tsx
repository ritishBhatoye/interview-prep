import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchHeader = () => {
  return (
    <div className="">
      <MagnifyingGlassIcon className="w-5 h-4" />
      <Input className="border-0" placeholder="Search typing your job search input" />
    </div>
  );
};

export default SearchHeader;
