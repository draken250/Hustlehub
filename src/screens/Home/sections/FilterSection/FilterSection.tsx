import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FilterSection = (): JSX.Element => {
  return (
    <div className="w-full h-10 bg-[#eeeeee] relative flex items-center justify-center">
      <div className="font-sans text-xs text-black">
        <span className="font-medium">For customer&nbsp;&nbsp;service ,</span>
        <span className="font-bold">Please ask support assistance </span>
      </div>
      <Separator
        className="w-[180px] absolute top-[27px] mx-auto"
        orientation="horizontal"
      />
    </div>
  );
};
