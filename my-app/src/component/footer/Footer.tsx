import {
  Compilence,
  Discord,
  Email,
  Github,
  Linkdin,
  Logo,
  Twitter,
  YouTube,
} from "@/src/assets/icons";
import React from "react";

const Footer = () => {
  const listService = [
    "HIPAA Compliant",
    "GDPR Compliant",
    "Data Localization",
    "SOC 2 Type 2",
    "ISO:27001",
    "CERT-in",
  ];
  const icon_list = [
    <Email />,
    <Discord />,
    <Twitter />,
    <Linkdin />,
    <Github />,
    <YouTube />,
  ];
  const listProduct = [
    "Real-time Audio & Video SDK",
    "Interactive Live Streaming SDK",
    "Real-time Transcription SDK",
    "Character SDK",
    "Open Source Examples",
  ];
  const listSolutions = ["Video KYC", "Telehealth", "EdTech", "Live Shopping"];
  const listDeveloper = [
    "Documentation",
    "Code Samples",
    "Developer Updates",
    "Developer Hub",
  ];
  const listCompany = [
    "About Us",
    "Contact Us",
    "Pricing",
    "Support",
    "Blog",
    "Press Kit",
  ];
  const footerLinks = [
    "Privacy Policy",
    "Terms of service",
    "Cookie notice",
    "CCPA notice",
    "Subprocessors",
    "DPA",
    "Rss",
  ];

  return (
    <footer className="flex gap-[10px] flex-col px-[5.5%] md:gap-[57px] bg-[#040404] pb-9 pt-20 my-9">
      <div className="flex gap-3 md:gap-[24px] items-center">
        {icon_list.map((item, index) => (
          <span key={`${item}` + index}>{item}</span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-4 gap-y-[40px] lg:gap-y-0">
        <div className="flex flex-col justify-start items-start sm:justify-center  sm:items-center  md:items-start">
          <Logo />
          <p className="font-sora font-normal text-base leading-6 tracking-normal text-[#989BA7] pt-[17px] max-w-[300px]">
            Easily to integrate real-time audio-video to your app or website in
            minutes.
          </p>
          <div className="grid grid-cols-2 gap-x-[20px] gap-y-[18px] pt-[11px] w-fit">
            {listService.map((item, index) => (
              <div
                key={`${item}` + index}
                className="flex gap-[14px] items-center"
              >
                <Compilence />
                <p className="font-sora font-semibold text-base leading-6 tracking-normal text-[#989BA7]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex  gap-[34px] justify-start sm:justify-center  md:justify-between">
          <div className="flex flex-col gap-[20px]">
            <p className="font-sora font-semibold text-[16px] leading-[12px] tracking-normal text-white">
              Products
            </p>
            <div className="flex flex-col gap-[20px]">
              {listProduct.map((item, index) => (
                <p
                  className="font-sora font-normal text-base leading-[22px] tracking-normal text-[#989BA7] max-w-[180px]"
                  key={`${item}` + index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="font-sora font-semibold text-[16px] leading-[12px] tracking-normal text-white">
              SOLUTIONS
            </p>
            <div className="flex flex-col gap-[20px]">
              {listSolutions.map((item, index) => (
                <p
                  className="font-sora font-normal text-base leading-[22px] tracking-normal text-[#989BA7] max-w-[152px]"
                  key={`${item}` + index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex  gap-[34px] justify-start sm:justify-center md:justify-between md:gap-[25px]">
          <div className="flex flex-col gap-[20px]">
            <p className="font-sora font-semibold text-[16px] leading-[12px] tracking-normal text-white">
              DEVELOPERS
            </p>
            <div className="flex flex-col gap-[20px]">
              {listDeveloper.map((item, index) => (
                <p
                  className="font-sora font-normal text-base leading-[22px] tracking-normal text-[#989BA7] "
                  key={`${item}` + index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="font-sora font-semibold text-[16px] leading-[12px] tracking-normal text-white">
              COMPANY
            </p>
            <div className="flex flex-col gap-[20px]">
              {listCompany.map((item, index) => (
                <p
                  className="font-sora font-normal text-base leading-[22px] tracking-normal text-[#989BA7] max-w-[152px]"
                  key={`${item}` + index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="font-sora font-normal text-[14px] leading-normal tracking-normal text-[#989BA7] text-center flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-x-2 md:gap-y-1 pt-4 pb-1.5">
        {footerLinks.map((link, index) => (
          <span key={index} className="mb-1 md:mb-0">
            {link}

            {index !== footerLinks.length - 1 && (
              <span className="hidden md:inline mx-1">|</span>
            )}
          </span>
        ))}
      </div>

      <div className="font-sora font-normal text-[14px] leading-normal tracking-normal text-[#989BA7] text-center pt-9 border-t border-[#1a1a1a]">
        2024 videosdk.live | All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
