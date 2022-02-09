import * as React from 'react';

const SvgDroplet = (props) => (
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
    className="droplet_svg__feather droplet_svg__feather-droplet"
    {...props}
  >
    <path d="m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

export default SvgDroplet;
