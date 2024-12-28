import React from "react";
import { IconBaseProps } from "../../types";

function BatteryTemperatureIcon({ color = "#808080" }: IconBaseProps) {
  return (
    <div className="flex items-center justify-center relative pt-1">
      <svg
        className="h-auto max-w-full w-20"
        width="80%"
        height="auto"
        viewBox="5 0 24 24"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Battery - Left side */}
        <g>
          <path
            d="M9 2H15C16.1046 2 17 2.89543 17 4V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V4C7 2.89543 7.89543 2 9 2Z"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
          />
          <rect x="10" y="0" width="4" height="2" fill={color} />
        </g>

        {/* Thermometer - Right side (scaled and adjusted) */}
        <g transform="translate(12, 1) scale(0.07)">
          <path
            d="M180.604,209.985v-176.819c0-18.316-14.682-33.166-33.001-33.166-18.316,0-32.999,14.85-32.999,33.166v176.819c-10,8.987-15.958,21.962-15.958,36.39 0,27.13 22.076,49.125 49.208,49.125 27.131,0 49-21.995 49-49.125 0-14.428-6.25-27.402-16.25-36.39zm-33.001-193.985c9.374,0 17.001,7.701 17.001,17.166v15.334h-17v16h17v17h-17v16h17v17h-17v16h17v17h-34v-114.334c0-9.465 7.626-17.166 16.999-17.166z"
            fill={color}
          />
        </g>
      </svg>
    </div>
  );
}

export default BatteryTemperatureIcon;
