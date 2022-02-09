import * as React from 'react';

const SvgZoomIn = (props) => (
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
    className="zoom-in_svg__feather zoom-in_svg__feather-zoom-in"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
  </svg>
);

export default SvgZoomIn;
