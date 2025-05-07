import React from "react";
import SubHeader from "../subHeader/SubHeader";
import ImageContent from "./ImageContent";
import image1 from "../../assets/images/slide41.png";
import image2 from "../../assets/images/slide42.png";
import image3 from "../../assets/images/slide43.png";
import image4 from "../../assets/images/slide44.png";
import image5 from "../../assets/images/slide45.png";

import {
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
} from "@/src/assets/icons";
import CompanyLogo5 from "@/src/assets/icons/CompanyLogo5";

const Slide4 = () => {
  const icon_list = [
    <CompanyLogo1 />,
    <CompanyLogo2 />,
    <CompanyLogo3 />,
    <CompanyLogo5 />,
    <CompanyLogo4 />,
  ];
  return (
    <section className="px-[7.2%] flex flex-col gap-9">
      <SubHeader
        heading="F E A T U R E S"
        subHeading="Features to enhance customer workflows"
      />
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
          <ImageContent
            url={image1}
            title="End-to-End Encryption"
            desc="Secure the communication with AES-256 transport level encryption."
          />
          <ImageContent
            url={image2}
            title="Cross Browser & Device"
            desc="Compatibility with almost every device and browser"
            maxWidth="max-w-[400px]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
          <ImageContent
            url={image3}
            title="Collaboration Tools"
            desc="Collaborate with users via chat, polls, whiteboard, and many more"
          />
          <ImageContent
            url={image4}
            title="Geo-fencing"
            desc="Restricts customers interaction to specific location only"
          />
          <ImageContent
            url={image5}
            maxWidth="max-w-[300px]"
            title="Adaptive Bitrate"
            desc="Auto-adjust the resolution based on the network condition"
          />
        </div>
        <div className="flex gap-[37px] flex-col py-2.5 lg:flex-row items-center px-[2.2%] border border-[#181818] bg-[#040404] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[40px] rounded-br-[40px]">
          <p className="font-sora font-semibold text-[32px] leading-[56px] tracking-[0%] align-middle text-white text-center">
            Your privacy is our responsibility
          </p>
          <div className="flex w-full justify-between items-center lg:flex-row flex-col gap-8 lg:gap-0">
            {icon_list.map((icon, index) => (
              <div key={`${index}index`}>{icon}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide4;
