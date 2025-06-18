"use client";

import React from "react";

import ExploreHeader from "./ExploreCategories/ExploreCategoriesUtils/ExploreHeader";
import ExploreCategoriesCard from "./ExploreCategories/ExploreCategoriesUtils/ExploreCategoriesCard";
import { exploreCategoryData } from "@/helpers/searchJob";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const ExploreCategory = () => {
  const router: AppRouterInstance = useRouter();
  return (
    <div className="grid grid-1 gap-12 py-5 mt-5 md:mt-6 lg:mt-7">
      <ExploreHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {exploreCategoryData.map((item) => (
          <ExploreCategoriesCard
            onClick={() => {
              router.push(`/search-job/${item.category.toLowerCase()}`);
            }}
            key={item.id}
            categories={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategory;
