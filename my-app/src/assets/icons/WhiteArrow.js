import * as React from "react";
const WhiteArrow = (props) => (
  <svg
    width={52}
    height={52}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={52}
      height={52}
      rx={26}
      transform="matrix(-1 0 0 1 52 0)"
      fill="#D9D9D9"
    />
    <path
      d="M20.75 22.25L17 26M17 26L20.75 29.75M17 26H35"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default WhiteArrow;
