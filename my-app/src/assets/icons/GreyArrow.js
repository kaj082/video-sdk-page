import * as React from "react";
const GreyArrow = (props) => (
  <svg
    width={52}
    height={52}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={52} height={52} rx={26} fill="white" fillOpacity={0.2} />
    <path
      d="M31.25 22.25L35 26M35 26L31.25 29.75M35 26H17"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GreyArrow;
