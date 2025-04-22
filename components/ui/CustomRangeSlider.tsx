import React from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const CustomRangeSlider = ({
  min,
  max,
  step,
  values,
  className,
}: {
  min: number;
  max: number;
  step: number;
  values: [number, number];
  className?: string;
}) => {
  return (
    <div className="w-full">
      {" "}
      <RangeSlider min={min} max={max} step={step} value={values} className={className} />
    </div>
  );
};

export default CustomRangeSlider;
