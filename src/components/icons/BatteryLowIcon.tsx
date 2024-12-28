import React from 'react'
;
import { IconBaseProps } from '../../types';

function BatteryLowIcon({color}: IconBaseProps) {
  return (
    <svg 
      width="80%" 
      height="auto"
      viewBox="0 0 24 24" 
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Main battery body */}
      <path
        d="M6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
      
      {/* Top terminal */}
      <rect
        x="10"
        y="0"
        width="4"
        height="2"
        fill={color}
      />

      {/* Battery level indicator */}
      <rect
        x="6"
        y="16"
        width="12"
        height="4"
        fill={color}
      />
      
      {/* Percentage text */}
      <text
        x="12"
        y="12"
        fill={color}
        fontSize="6"
        fontWeight="bold"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        %
      </text>
    </svg>
  );
}

export default BatteryLowIcon