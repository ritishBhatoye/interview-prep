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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Jobs in {category}</h1>
      {/* Add your category-specific content here */}
      <div>{/* You can fetch and display jobs based on the category */}</div>
    </div>
  );
};

export default CategoryPage;
