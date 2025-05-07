import * as React from "react";
const ButtonArrow = (props) => (
  <svg
    width={18}
    height={16}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.25 1.75L16.5 8M16.5 8L10.25 14.25M16.5 8H1.5"
      stroke="#795DCC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ButtonArrow;
