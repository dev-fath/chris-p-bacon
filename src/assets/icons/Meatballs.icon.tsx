import React from 'react';
import { IconProps } from '@assets/icons/IconBase';

const Meatballs = (props: IconProps) => {
  const { width, height, color } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" aria-hidden="true">
      <g>
        <path
          fill={color}
          d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
        ></path>
      </g>
    </svg>
  );
};

export default Meatballs;
