import * as React from 'react';

const SvgCheck = (props) => (
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
    className="check_svg__feather check_svg__feather-check"
    {...props}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default SvgCheck;
