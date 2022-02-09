import * as React from 'react';

const SvgPlay = (props) => (
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
    className="play_svg__feather play_svg__feather-play"
    {...props}
  >
    <path d="m5 3 14 9-14 9V3z" />
  </svg>
);

export default SvgPlay;
