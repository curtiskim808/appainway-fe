import React from "react";
import { IconBaseProps } from "../../types";

function BatteryTemperatureIcon({ color = "#808080" }: IconBaseProps) {
  return (
    <div className="pt-3">
      <svg
        width="150%"
        height="120%"
        viewBox="0 0 48 24"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Battery - Left side */}
        <g transform="translate(0, 0)">
          <path
            d="M6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
          />
          <rect x="10" y="0" width="4" height="2" fill={color} />
        </g>

        {/* Thermometer - Right side (scaled and adjusted) */}
        <g transform="translate(16, 1) scale(0.07)">
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
