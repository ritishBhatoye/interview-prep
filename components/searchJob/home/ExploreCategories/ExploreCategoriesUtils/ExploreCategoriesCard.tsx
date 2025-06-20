"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { exploreCategoryDataType } from "@/types/searchJob";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface props {
  categories: exploreCategoryDataType;
  onClick: () => void;
}

const ExploreCategoriesCard = ({ categories, onClick }: props) => {
  return (
    <motion.div
      whileHover={{
        scale: 0.8,
        rotateX: 1,
        rotateY: 1,
        transition: { duration: 0.2 },
      }}
      className="flex cursor-pointer   bg-gradient-to-tl from-gray-900/30 to-blue-950/100  hover:from-blue-800/50 hover:to-blue-900/30 duration-150 flex-col items-start gap-5 p-4 border-0 rounded-md"
      style={{ perspective: 1000 }}
      onClick={onClick}
    >
      <motion.div whileHover={{ z: 20 }} transition={{ duration: 0.2 }}>
        <Image src={categories.icon} width={20} height={20} className="" alt="" />
      </motion.div>

      <div className="flex flex-col gap-3">
        <motion.h1 whileHover={{ z: 10 }} className="text-2xl font-semibold">
          {categories.category}
        </motion.h1>
        <motion.div whileHover={{ z: 15 }} className="flex flex-row items-center gap-2">
          <p className="text-white/30 text-lg font-normal">{categories.totalJobs} jobs available</p>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <ArrowRightIcon className="w-6 h-6 cursor-pointer text-blue-500" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExploreCategoriesCard;
