import Image from "next/image";
import React from "react";
import Button from "../button/Botton";
import GradientButton from "../gradientButton/GradientButton";
import { GoogleIcon } from "@/src/assets/icons";
import slideImage from "../../assets/images/slide1.png";

const Slide1 = () => {
  return (
    <section className="flex flex-col justify-between items-center px-4 sm:pl-9 sm:pr-12 pt-[90px] pb-9 lg:flex-row">
      <div className="flex flex-col gap-[20px] w-[100%] lg:w-[43%]">
        <p className="font-poppins font-semibold text-4xl sm:text-5xl md:text-6xl leading-[100%] tracking-[0] text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#7C5ECC] to-[#A4A4FE] whitespace-nowrap">
            Real-time video <br />
          </span>
          infrastructure for every developer
        </p>
        <div className="flex justify-between items-center">
          <Button
            title="Sign up free with google"
            prefixIcon={<GoogleIcon />}
          />
          <GradientButton title="Book a demo" />
        </div>
        <p className="font-poppins font-semibold text-[14px] leading-normal tracking-[0] text-[#666666] ">
          or <span className="text-white">Signup free with email</span>. No
          credit card required to start.
        </p>
      </div>
      <div className="w-[100%] lg:w-[48%] h-fit">
        <Image src={slideImage} alt="slide1" width={1000} height={1000} />
      </div>
    </section>
  );
};

export default Slide1;
