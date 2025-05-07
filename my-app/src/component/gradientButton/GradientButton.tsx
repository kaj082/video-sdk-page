import { ButtonArrow } from "@/src/assets/icons";
import React from "react";
interface Props {
  suffixIcon?: boolean;
  prefixIcon?: boolean;
  title: string;
  classname?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
const GradientButton = (props: Props) => {
  const { buttonProps, title, prefixIcon, suffixIcon, classname } = props;
  return (
    <button
      {...buttonProps}
      className={`bg-button-gradient h-[42px] px-[21px] rounded-[30px] flex items-center whitespace-nowrap gap-[8px] hover:cursor-pointer hover:opacity-90 ${classname}`}
    >
      {prefixIcon && <span className="">{prefixIcon}</span>}
      <span className="font-sora font-semibold text-[10px] sm:text-[16px] leading-normal text-white text-center">
        {title}
      </span>
      {suffixIcon && (
        <span className="h-9 w-9 flex items-center justify-center bg-white rounded-full">
          <ButtonArrow />
        </span>
      )}
    </button>
  );
};

export default GradientButton;
