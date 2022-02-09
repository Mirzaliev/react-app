import * as React from 'react';

const SvgArrowLeftCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-left-circle_svg__feather arrow-left-circle_svg__feather-arrow-left-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="m12 8-4 4 4 4M16 12H8" />
  </svg>
);

export default SvgArrowLeftCircle;