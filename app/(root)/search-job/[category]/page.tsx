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
      <FeaturedJobs title={category[0].toUpperCase() + category.slice(1)} />
    </div>
  );
};

export default CategoryPage;
