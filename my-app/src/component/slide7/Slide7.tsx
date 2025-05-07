import React from "react";
import SubHeader from "../subHeader/SubHeader";
import {
  DocumentIcon,
  GithubIcon,
  GoogleIcon,
  LiveIcon,
  YouTubeIcon,
} from "@/src/assets/icons";
import ContentBox from "./ContentBox";
import Button from "../button/Botton";
import GradientButton from "../gradientButton/GradientButton";
import Image from "next/image";
import gradeImage from "../../assets/images/slide7.png";

const Slide7 = () => {
  const community_list = [
    {
      icon: <YouTubeIcon />,
      title: "Video Tutorials",
      desc: "“How-to-Videos” for integrating our products to your platform.",
      views: "1.5k",
    },
    {
      icon: <DocumentIcon />,
      title: "Documentation",
      desc: "“How-to-Videos” for integrating our products to your platform.",
      views: "2.5k",
    },
    {
      icon: <LiveIcon />,
      title: "Live Webinars",
      desc: "“How-to-Videos” for integrating our products to your platform.",
      views: "1k",
    },
    {
      icon: <GithubIcon />,
      title: "GitHub",
      desc: "“How-to-Videos” for integrating our products to your platform.",
      views: "FOR KIT",
    },
  ];
  return (
    <div className="px-[4.7%] flex flex-col gap-9 pt-20">
      <SubHeader heading="C O M M U N I T Y" subHeading="Join Our Community" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[12px]">
        {community_list.map((item, index) => {
          return <ContentBox key={index} {...item} />;
        })}
      </div>
      <div className="flex flex-col gap-[14px] relative h-[483px] justify-center z-[1]">
        <Image
          alt="gradeImage"
          className="absolute left-1/2 z-[-1] top-4 sm:top-[-115px] transform -translate-x-1/2"
          src={gradeImage}
          width={1000}
          height={483}
        />
        <b className="font-poppins font-semibold text-[28px] leading-[38px] tracking-[0px] text-center text-white">
          Let’s build together
        </b>
        <p className="font-poppins font-normal text-[16px] leading-[26px] tracking-[0px] text-center text-white">
          Free 10,000 minutes every month | No credit card required to start
        </p>
        <div className="flex justify-center gap-[18px]">
          <Button
            title="Sign up free with google"
            prefixIcon={<GoogleIcon />}
          />
          <GradientButton title="Book a demo" />
        </div>
      </div>
    </div>
  );
};

export default Slide7;
