import React from "react";
import Image from "next/image";

// import RotatingTechIcons from "../../elements/RotatingTechIcons";

const companies = [
  { name: "Amazon", logo: "/covers/amazon.png" },
  { name: "Facebook", logo: "/covers/facebook.png" },
  { name: "Adobe", logo: "/covers/adobe.png" },
  { name: "Spotify", logo: "/covers/spotify.png" },
  { name: "Pinterest", logo: "/covers/pinterest.png" },
  { name: "Reddit", logo: "/covers/reddit.png" },
];

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
      <div className="flex flex-col gap-5  max-w-2xl">
        <h1 className="text-4xl font-extralight text-white">
          Finding the job beyond borders
        </h1>
        <h1 className="text-5xl font-medium">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups
        </h1>
        {/* <h1></p> */}

        <p className="text-xs text-white/30 font-normal mt-4">
          Popular: Frontend Developer, UI Designer, UX Researcher
        </p>
      </div>

      <div className="relative flex-1 h-[500px] flex justify-center items-center perspective-[1000px]">
        <div className="relative w-full h-full transform-style-3d">
          {companies.map((company, index) => {
            const delay = `${index * -3}s`;
            return (
              <div
                key={company.name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"
                style={{ animationDelay: delay }}
              >
                <div className="group relative animate-float">
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 text-white px-3 py-1.5 rounded-lg text-sm -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {company.name}
                  </div>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={60}
                    height={60}
                    className="rounded-full bg-grey-matte-100 p-2 hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
