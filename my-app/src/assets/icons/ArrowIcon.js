import * as React from "react";
const ArrowIcon = (props) => (
  <svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={21} cy={21} r={20.5} stroke="#6C6C6C" />
    <path
      d="M21.735 15.5903L27.0314 15.3201M27.0314 15.3201L27.3017 20.6165M27.0314 15.3201L14.9686 28.6801"
      stroke="#E1E1E1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowIcon;
