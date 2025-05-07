import { CrossIcon } from "@/src/assets/icons";
import React from "react";
import Button from "../button/Botton";
import GradientButton from "../gradientButton/GradientButton";

interface Props {
  className?: string;
  isOpen: boolean;
  handleClick: () => void;
}

const MobileSideMenu = (props: Props) => {
  const { className, handleClick, isOpen } = props;
  const navLinks = [
    "Products",
    "Solutions",
    "Developer",
    "Pricing",
    "Success Stories",
    "Resources",
  ];
  return (
    <nav
      className={`fixed top-0 left-0 z-40 w-full h-screen overflow-hidden flex flex-col gap-8 items-center bg-[#0C0B0B] pt-[41px] px-[21px] transition-all duration-300 ease-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div onClick={handleClick} className="cursor-pointer mr-auto">
        <CrossIcon />
      </div>
      <div className="flex flex-col gap-8 items-center">
        {navLinks.map((link, index) => (
          <span
            key={`${link}index`}
            className="font-sora font-normal text-sm leading-none tracking-normal text-center text-[#989BA7] hover:cursor-pointer"
          >
            {link}
          </span>
        ))}
      </div>
      <div className=" items-center whitespace-nowrap flex flex-col gap-8">
        <p className="font-sora font-semibold text-sm leading-none tracking-normal text-center text-white">
          Talk to us
        </p>
        <Button title="Log in" />
        <GradientButton title="Try it for free" />
      </div>
    </nav>
  );
};

export default MobileSideMenu;
