import React from "react";
import { Button } from "../ui/button";

const InfoCard = ({
  title,
  subTitle,
  description,
  className,
  sectionClassName,
  ctaLabel,
  ctaClassName,
}: {
  title: string;
  subTitle?: string;
  description?: string;
  className?: string;
  sectionClassName?: string;
  ctaLabel: string;
  ctaClassName: string;
}) => {
  return (
    <div className={`${className}`}>
      <div
        className={`flex flex-col gap-6 py-12 max-w-7xl mx-auto items-center ${sectionClassName}`}
      >
        <h1 className="text-white font-medium ">{title}</h1>
        {subTitle && <p className="text-primary-100 font-extralight text-xl">{subTitle}</p>}
        {description && <p className="text-base font-extralight text-primary-100">{description}</p>}

        <Button
          className={`text-primary-100 cursor-pointer  hover:text-white text-lg font-medium ${ctaClassName}`}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
};

export default InfoCard;
