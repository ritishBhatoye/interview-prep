import React from "react";

import Image from "next/image";

import {
  ChevronDoubleDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import TypingEffect from "@/components/elements/TypingEffect";

// interface props{
//     title?:string;
//     subTitle?:string;
//     img?:string;
// }

const HeroSection = () => {
  return (
    <div className="flex flex-row items-center  p-2 w-full justify-between bg-gradient-to-tl ">
      <div className="flex flex-col items-start root-layout p-5 mx-auto">
        <h1 className="text-lg md:text-3xl lg:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent ">
          Improve your resume and LinkedIn profile
        </h1>
        <TypingEffect
          text=" Designed by top recruiters, our AI-powered platform instantly gives
          you tailored feedback on your resume and LinkedIn profile. Land 5x
          more interviews, opportunities and job offers."
          className="text-2xl font-extralight  text-white leading-10"
        />

        <div className="flex flex-row items-center gap-5 py-5">
          <Button className="flex flex-row gap-1 shadow-4xl  items-center p-5 text-lg text-white rounded-lg cursor-pointer bg-success-100 hover:bg-success-200">
            Get Started for free <ChevronDoubleRightIcon className="w-4 h-4 " />
          </Button>
          <Button className="flex flex-row items-center shadow-4xl  text-white p-5 text-lg bg-ocean-blue-500 hover:opacity-20 cursor-pointer">
            See Preview
            <ChevronDoubleDownIcon className="w-4 h-4 " />
          </Button>
        </div>
      </div>
      <Image
        src={"/assets/searchJob/resume.png"}
        alt="Resume"
        height={900}
        width={800}
        className="rounded-4xl shadow-2xl !rounded-r-none"
      />
    </div>
  );
};

export default HeroSection;
