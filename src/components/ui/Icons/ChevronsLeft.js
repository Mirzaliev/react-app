import * as React from 'react';

const SvgChevronsLeft = (props) => (
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
    className="chevrons-left_svg__feather chevrons-left_svg__feather-chevrons-left"
    {...props}
  >
    <path d="m11 17-5-5 5-5M18 17l-5-5 5-5" />
  </svg>
);

export default SvgChevronsLeft;