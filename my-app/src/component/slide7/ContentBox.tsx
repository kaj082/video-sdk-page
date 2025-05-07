import { ArrowIcon } from "@/src/assets/icons";
import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
  views: string;
}

const ContentBox = (props: Props) => {
  const { icon, title, desc, views } = props;
  return (
    <div className="flex flex-col justify-between items-center p-6 h-[420px] rounded-[18px] bg-[#0F0E0E]">
      <div className="flex flex-col w-full">
        {icon}
        <p className="mt-[25px] pb-2.5 font-[500] text-[22px] leading-[24px] tracking-[0] font-poppins text-white">
          {title}
        </p>
        <p className="font-poppins font-normal text-[16px] leading-[21px] tracking-[0] text-[#848485]">
          {desc}
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="font-poppins font-normal text-[16px] leading-[21px] tracking-[0] text-[#848485]">
          {views}
        </p>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default ContentBox;
