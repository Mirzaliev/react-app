import * as React from 'react';

const SvgChevronUp = (props) => (
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
    className="chevron-up_svg__feather chevron-up_svg__feather-chevron-up"
    {...props}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

export default SvgChevronUp;
