import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  desc?: string;
  slideNumber?: string;
  className?: string;
  isActive?: boolean;
}

const DescriptionBox = (props: Props) => {
  const { icon, title, desc, slideNumber, className, isActive } = props;
  return (
    <div
      className={`flex flex-col justify-between h-[521px] w-[100%] border border-[#181818] ${
        isActive ? "bg-[#0F0E0E]" : "bg-[#040404]"
      } rounded-[12px]  p-[25px] ${className}`}
    >
      <div className="flex flex-col gap-5">
        {icon}
        <p className="font-sora font-semibold text-[22px] leading-[42px] tracking-[0px] text-white">
          {title}
        </p>
        {isActive && (
          <p className="font-sora font-normal text-[16px] leading-[26px] tracking-[0px] text-[#989BA7]">
            {desc}
          </p>
        )}
      </div>
      <p className="font-sora font-semibold text-[42px] leading-[44px] tracking-[0px] text-white">
        {slideNumber}
      </p>
    </div>
  );
};

export default DescriptionBox;
