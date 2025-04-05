import InfoCard from "@/components/elements/InfoCard";
import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <InfoCard
        title={"Universities, Bootcamps and Educational Institutions"}
        subTitle="Our AI-powered career platform is proven to improve student outcomes and dramatically improve your efficiency. Offer career coaching services, such as resume reviews, targeting, and LinkedIn reviews, at scale and drive operational efficiencies."
        description="Want to learn more or request a demo? Get in touch below."
        ctaLabel="Get in touch or request demo"
        ctaClassName="p-5 bg-cosmic-purple-900 font-medium"
        className="pattern"
      />
    </div>
  );
};

export default GetInTouch;
