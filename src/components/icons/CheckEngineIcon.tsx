import React from "react";
import { IconBaseProps } from "../../types";

function CheckEngineIcon({ color }: IconBaseProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 -2 24 24"
      fill="none"
      style={{ transform: "rotate(180deg)" }}
    >
      <path
        d="M12 3C9 3 7 5 7 8C7 10 8 11.5 9 12.5V15C9 15.5523 9.44772 16 10 16H14C14.5523 16 15 15.5523 15 15V12.5C16 11.5 17 10 17 8C17 5 15 3 12 3Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default CheckEngineIcon;
