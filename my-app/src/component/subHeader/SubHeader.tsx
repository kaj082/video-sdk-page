import React from "react";

interface Props {
  heading: string;
  subHeading: string;
  subSubHeading?: string;
  isLeftAlign?: boolean;
  fontSize?: string;
}
const SubHeader = (props: Props) => {
  const { heading, subHeading, isLeftAlign, subSubHeading, fontSize } = props;
  return (
    <div
      className={`flex flex-col gap-[12px] ${
        isLeftAlign ? "items-start" : "items-center"
      } `}
    >
      <h3 className="font-pragati font-normal text-[14px] leading-[100%] tracking-normal text-center text-[#ADADB1]">
        {heading}
      </h3>
      <h4
        className={`font-sora font-semibold text-2xl md:${
          fontSize ? fontSize : "text-[32px]"
        } sm:text-[36px}  leading-[100%] tracking-[0px] text-center text-white`}
      >
        {subHeading}
      </h4>
      {subSubHeading && (
        <h5 className="font-inter font-medium text-[16px] leading-[16px] tracking-normal text-center text-[#848484]">
          {subSubHeading}
        </h5>
      )}
    </div>
  );
};

export default SubHeader;
