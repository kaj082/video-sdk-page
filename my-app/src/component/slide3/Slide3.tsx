import React from "react";
import SubHeader from "../subHeader/SubHeader";
import Image from "next/image";
import gradentImage from "../../assets/images/slide3.png";

const Slide3 = () => {
  const detail_number = [
    {
      view: "100K",
      desc: "Interactive Participant Support",
    },
    {
      view: "150 ms",
      desc: "Worldwide Latency",
    },
    {
      view: "42+",
      desc: "Countries Served",
    },
    {
      view: "99.9%",
      desc: "Uptime",
    },
  ];
  return (
    <section className="flex flex-col gap-[50px] w-full items-center px-4 sm:px-0 pb-8 sm:pb-28">
      <SubHeader
        heading="B A T C H M A R K S"
        subHeading="Global Infrastructure for Developers"
        subSubHeading="Our global mesh network is optimized for scale."
      />

      <div
        className="w-full sm:w-[70%] md:w-[80%] lg:w-[70%] grid grid-cols-1  md:grid-cols-4
        rounded-[19px] bg-[#0F0E0E]
        lg:grid-cols-4 gap-4 relative border-2 border-[#1B1B1B] bg-[#0F0E0E
]"
      >
        {detail_number.map((item, index) => (
          <div
            key={index}
            className={`w-full flex flex-col items-center md:items-start justify-center gap-4 px-11 h-[195px] ${
              index !== detail_number.length - 1
                ? "border-b md:border-b-0 md:border-r border-[#ADADB1]"
                : ""
            }`}
          >
            <p className="font-inter font-semibold text-[32px] leading-[42px] tracking-[0] text-white">
              {item.view}
            </p>
            <p className="font-inter font-normal text-[18px] leading-[24px] tracking-[0] text-[#C5C5C5] text-center md:text-left">
              {item.desc}
            </p>
          </div>
        ))}
        <div className="w-[420px] h-[106px] hidden md:block absolute top-[20px] left-1/2 transform -translate-x-1/2">
          <Image alt="" src={gradentImage} width={420} height={106} />
        </div>
      </div>
    </section>
  );
};

export default Slide3;
