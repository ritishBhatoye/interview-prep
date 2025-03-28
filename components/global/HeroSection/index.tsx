import React from "react";

// import RotatingTechIcons from "../../elements/RotatingTechIcons";

const HeroSection = () => {
  //   const popularTechStack = [
  //     "React",
  //     "TypeScript",
  //     "Next.js",
  //     "Node.js",
  //     "TailwindCSS",
  //     "MongoDB",
  //   ];

  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-col max-w-2xl">
        <h1 className="text-4xl font-light text-white">
          Finding the job beyond borders
        </h1>
        <h1 className="text-4xl font-medium">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups
        </h1>
        {/* <h1></p> */}

        <p className="text-xs text-white/30 font-normal mt-4">
          Popular: Frontend Developer, UI Designer, UX Researcher
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center perspective-1000">
        {/* 
        <RotatingTechIcons techStack={popularTechStack} /> 
        */}
      </div>
    </div>
  );
};

export default HeroSection;
