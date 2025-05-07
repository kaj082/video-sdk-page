"use client";

import {
  Collaborate,
  GreyArrow,
  Target,
  TargetIcon,
  WhiteArrow,
} from "@/src/assets/icons";
import React from "react";
import DescriptionBox from "./DescriptionBox";
import { title } from "process";

const Slide5 = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? desc_box.length - 1 : prevIndex - 1
    );
  };
  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === desc_box.length - 1 ? 0 : prevIndex + 1
    );
  };
  const desc_box = [
    {
      icon: <Target />,
      title: "Understanding your goals ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      slideNumber: "01",
    },
    {
      icon: <Collaborate />,
      title: "Onboard your team ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      slideNumber: "02",
    },
    {
      icon: <TargetIcon />,
      title: "Onboard your team",
      desc: "",
      slideNumber: "03",
    },
  ];
  return (
    <section className="px-[6%] flex flex-col gap-8 py-24">
      <div className="flex justify-between items-center gap-4 md:flex-row flex-col">
        <div className="flex flex-col gap-[12px] items-start">
          <h3 className="font-pragati font-normal text-[14px] leading-[100%] tracking-normal text-center text-[#ADADB1]">
            B E S T I N - C L A S S C U S T O M E R S U C C E S S
          </h3>
          <h4
            className={`font-sora font-semibold text-2xl 
          "text-[32px]"
        sm:text-[36px}  leading-[100%] tracking-[0px] text-center text-white`}
          >
            Customer Satisfaction delivered in 2 weeks
          </h4>
        </div>
        <div className="flex gap-[25px] items-center">
          <div onClick={handlePrevClick}>
            <WhiteArrow />
          </div>
          <div onClick={handleNextClick}>
            <GreyArrow />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
        {desc_box.map((item, index) => {
          return (
            <DescriptionBox
              key={index}
              {...item}
              isActive={index === 1}
              className={`${index === activeIndex ? "p-9" : ""}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Slide5;
