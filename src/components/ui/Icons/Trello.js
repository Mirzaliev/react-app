import * as React from 'react';

const SvgTrello = (props) => (
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
    className="trello_svg__feather trello_svg__feather-trello"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M7 7h3v9H7zM14 7h3v5h-3z" />
  </svg>
);

export default SvgTrello;