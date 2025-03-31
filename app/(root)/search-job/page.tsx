import HeroSection from "@/components/global/HeroSlider";
import ExploreCategory from "@/components/searchJob/home/ExploreCategory";
import FeaturedJobs from "@/components/searchJob/home/FeaturedJobs";
import React from "react";

const SearchJobPage = () => {
  return (
    <div>
      <HeroSection />
      <ExploreCategory />
      <FeaturedJobs />
    </div>
  );
};

export default SearchJobPage;
