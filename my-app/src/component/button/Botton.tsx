import React, { HtmlHTMLAttributes } from "react";

interface Props {
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  title: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = (props: Props) => {
  const { buttonProps, title, prefixIcon, suffixIcon } = props;

  return (
    <button
      {...buttonProps}
      className="border border-[#A4A4FE] shadow-[0px_2px_6px_0px_#A5B4FCCC] whitespace-nowrap rounded-[30px] h-[42px] px-[21px] flex items-center gap-[8px] hover:cursor-pointer hover:opacity-90 "
    >
      {prefixIcon && <span className="">{prefixIcon}</span>}
      <span className="font-sora font-semibold text-[10px] sm:text-[16px] leading-normal text-white text-center">
        {title}
      </span>
      {suffixIcon && <span className="">{suffixIcon}</span>}
    </button>
  );
};

export default Button;
