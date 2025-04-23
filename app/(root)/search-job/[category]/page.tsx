import SearchFilter from "@/components/searchJob/Category/SearchFilter";
import FeaturedJobs from "@/components/searchJob/home/FeaturedJobs";
import SearchHeader from "@/components/searchJob/SearchHeader";
import React from "react";

// Define the props interface for the page component
interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  // Access the category from the URL
  const { category } = params;

  return (
    <div className="flex flex-col items-start gap-5">
      <h1 className="text-3xl font-bold mb-6">Jobs in {category}</h1>
      <FeaturedJobs />
    </div>
  );
};

export default CategoryPage;
