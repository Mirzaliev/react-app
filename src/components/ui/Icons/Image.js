import * as React from 'react';

const SvgImage = (props) => (
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
    className="image_svg__feather image_svg__feather-image"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <circle cx={8.5} cy={8.5} r={1.5} />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

export default SvgImage;
