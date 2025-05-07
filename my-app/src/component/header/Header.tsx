"use client";
import { Logo } from "@/src/assets/icons";
import React from "react";
import Button from "../button/Botton";
import GradientButton from "../gradientButton/GradientButton";
import MobileSideMenu from "../mobileSideMenu/MobileSideMenu";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const navLinks = [
    "Products",
    "Solutions",
    "Developer",
    "Pricing",
    "Success Stories",
    "Resources",
  ];
  return (
    <nav className="bg-[radial-gradient(50%_50%_at_50%_50%,_#181818_0%,_#0C0B0B_100%)] h-[74px] flex justify-between items-center px-[36px]">
      <div className="hover:cursor-pointer">
        <Logo />
      </div>
      <div className="justify-between items-center w-[47%] xl:w-[50%] hidden lg:flex">
        {navLinks.map((link, index) => (
          <li
            key={`${link}index`}
            className="list-none m-0 p-0 font-sora font-normal text-sm leading-none tracking-normal text-center text-[#989BA7] hover:cursor-pointer"
          >
            {link}
          </li>
        ))}
      </div>
      <div className="justify-between items-center w-[30%] xl:w-[25%] whitespace-nowrap hidden lg:flex">
        <p className="font-sora font-semibold text-sm leading-none tracking-normal text-center text-white">
          Talk to us
        </p>
        <Button title="Log in" />
        <GradientButton title="Try it for free" />
      </div>
      <button
        onClick={handleClick}
        className="flex flex-col justify-between items-center w-8 h-6  border-0 p-1 bg-white rounded-[2px] lg:hidden"
      >
        <span className="w-6 h-1 rounded-[2px] bg-black"></span>
        <span className="w-6 h-1 rounded-[2px] bg-black"></span>
        <span className="w-6 h-1 rounded-[2px] bg-black"></span>
      </button>
      <MobileSideMenu handleClick={handleClick} isOpen={isOpen} />
    </nav>
  );
};

export default Header;
