import * as React from 'react';

const SvgArrowUp = (props) => (
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
    className="arrow-up_svg__feather arrow-up_svg__feather-arrow-up"
    {...props}
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

export default SvgArrowUp;
