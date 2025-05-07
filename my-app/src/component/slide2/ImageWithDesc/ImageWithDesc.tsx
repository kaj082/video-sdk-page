import Image from "next/image";
import GradientButton from "../../gradientButton/GradientButton";
import mainImage from "../../../assets/images/slide2main.png";
import credit from "../../../assets/images/slide2Credit.png";
import recImage from "../../../assets/images/slide2rec.png";

import main2Image from "../../../assets/images/slide21main.png";
import credit2 from "../../../assets/images/slide21Credit.png";
import rec2Image from "../../../assets/images/slide21rec.png";

interface Props {
  title: string;
  subTitle: string;
  desc: string;
  isReverse?: boolean;
}

const ImageWithDesc = (props: Props) => {
  const { title, subTitle, desc, isReverse } = props;
  return (
    <div
      className={`flex flex-col gap-5 lg:gap-0 pb-2.5 lg:pb-0 ${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-between items-center rounded-[18px] bg-[#0C0B0B]`}
    >
      {!isReverse ? (
        <div className="w-[100%] lg:w-[44%] relative bg-gradient-to-b from-[#A4A4FE] to-[#28317A] rounded-[18px] pl-[18px] pt-20">
          <Image alt="slide2" src={mainImage} width={1000} height={1000} />
          <Image
            alt="credit"
            className="absolute w-[100px] md:w-fit right-0 translate-x-[12px] md:translate-x-[36px] top-3 md:top-1/5"
            src={credit}
            width={155}
            height={145}
          />
          <Image
            alt="recording"
            className="absolute bottom-1.5 w-48 md:w-fit md:bottom-6 left-1/2 transform -translate-x-1/2"
            src={recImage}
            width={248}
            height={32}
          />
        </div>
      ) : (
        <div className="w-[100%] lg:w-[44%] relative bg-gradient-to-b from-[#A4A4FE] to-[#28317A] rounded-[18px] pr-[5.5%] pt-20">
          <Image
            alt="slide2"
            className="rounded-tl-[18px] rounded-br-[18px] bg-white"
            src={main2Image}
            width={1000}
            height={1000}
          />
          <Image
            alt="credit"
            className="absolute w-[100px] md:w-fit right-9 top-3 md:top-1/5"
            src={credit2}
            width={155}
            height={145}
          />
          <Image
            alt="recording"
            className="absolute left-0 w-48 
            top-1/2 
       md:-traslate-x-0
       md:w-[248px] 
       md:left-0 
       md:transform 
       md:-translate-y-1/2 
       lg:-translate-x-[81px]"
            src={rec2Image}
            width={248}
            height={32}
          />
        </div>
      )}

      <div className="flex flex-col gap-[20px] w-[100%] lg:w-[43%] px-3 md:pl-11 md:pr-8">
        <p className="font-sora font-normal text-[22px] leading-[28px] tracking-[0px] text-[#596BFF]">
          {title}
        </p>
        <p className="font-serif font-bold text-[32px] leading-[42px] tracking-[0px] text-white">
          {subTitle}
        </p>
        <p className="font-sora font-normal text-[16px] leading-[26px] tracking-[0px] text-[#E1E1E1]">
          {desc}
        </p>
        <GradientButton classname="mt-5 w-fit" title="Learn More" suffixIcon />
      </div>
    </div>
  );
};
export default ImageWithDesc;
