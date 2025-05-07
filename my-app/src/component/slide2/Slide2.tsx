import React from "react";
import SubHeader from "../subHeader/SubHeader";
import ImageWithDesc from "./ImageWithDesc/ImageWithDesc";

const Slide2 = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-[5.5%] gap-[70px] pb-28 sm:pb-28 ">
      <SubHeader
        heading="P R O D U C T"
        subHeading="Video SDK Products"
        fontSize="text-[42px]"
      />
      <ImageWithDesc
        isReverse={false}
        desc="Scalable real-time solution for developers, full customization and seamless cross-platform support, delivering high-quality experiences that adapt 
flawlessly to any network environment."
        subTitle="Real Time AI Agents "
        title="Real Time AI Agents "
      />
      <ImageWithDesc
        isReverse={true}
        desc="Scalable real-time solution for developers, full customization and seamless cross-platform support, delivering high-quality experiences that adapt 
flawlessly to any network environment."
        subTitle="Character SDK"
        title="Character SDK"
      />
    </section>
  );
};

export default Slide2;
