import SearchFilter from "@/components/searchJob/Category/SearchFilter";
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
    <div className="">
      <SearchHeader />
      <div className="w-10/12 2xl:w-9/12 mx-auto flex flex-row items-center">
        <SearchFilter />
        <h1 className="text-3xl font-bold mb-6">Jobs in {category}</h1>
      </div>
    </div>
  );
};

export default CategoryPage;
