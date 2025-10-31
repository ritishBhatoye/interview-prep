import HeroSection from "@/components/global/HeroSlider";
import JobSearch from "@/components/jobs/JobSearch";
import ExploreCategory from "@/components/searchJob/home/ExploreCategory";
import FeaturedJobs from "@/components/searchJob/home/FeaturedJobs";

const SearchJobPage = () => {
  return (
    <div>
      <JobSearch/>
      <HeroSection />
      <div className="w-10/12 2xl:w-9/12 mx-auto">
        <ExploreCategory />
        <FeaturedJobs />
      </div>
    </div>
  );
};

export default SearchJobPage;
