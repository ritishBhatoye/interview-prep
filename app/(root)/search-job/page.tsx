import HeroSection from "@/components/global/HeroSlider";
import ExploreCategory from "@/components/searchJob/home/ExploreCategory";
import FeaturedJobs from "@/components/searchJob/home/FeaturedJobs";
import React from "react";

const SearchJobPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-10/12 2xl:w-9/12 mx-auto">
        <ExploreCategory />
        <FeaturedJobs />
      </div>
    </div>
  );
};

export default SearchJobPage;
