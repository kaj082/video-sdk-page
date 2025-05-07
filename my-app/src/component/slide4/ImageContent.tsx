import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  title: string;
  desc: string;
  url: StaticImageData;
  maxWidth?: string;
}

const ImageContent = (props: Props) => {
  const { title, desc, url, maxWidth } = props;
  return (
    <div className="flex justify-center flex-col h-[416px] w-[100%] border border-[#181818] bg-[#040404] rounded-[12px] gap-[20px] items-center p-2.5">
      <Image
        alt=""
        src={url}
        width={550}
        height={1000}
        className={`${maxWidth}`}
      />
      <div className="flex flex-col gap-[16px]">
        <p className="font-inter font-semibold text-[18px] leading-[16px] tracking-[0%] text-center align-middle text-white">
          {title}
        </p>
        <p className="font-inter font-medium text-[16px] leading-[24px] tracking-[0%] text-center align-middle text-[#828282]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ImageContent;
