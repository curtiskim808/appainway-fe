/**
 * MotorStatusIcon component renders an SVG icon representing the status of a motor.
 * The icon consists of a battery-like shape with a lightning bolt in the center.
 *
 * @param {IconBaseProps} props - The properties for the icon component.
 * @param {string} props.color - The color to be used for the icon's stroke and fill.
 *
 * @returns {JSX.Element} The rendered MotorStatusIcon component.
 */
import { IconBaseProps } from "../../types";

function MotorStatusIcon({ color }: IconBaseProps) {
  return (
    <div className="flex items-center justify-center relative pt-1">
      <svg
        className="h-auto max-w-full w-20"
        width="80%"
        height="auto"
        viewBox="0 0 24 24"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Main battery body */}
        <rect
          x="5"
          y="2"
          width="14"
          height="20"
          rx="1"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
        />

        {/* Top terminal */}
        <rect x="10" y="0" width="4" height="1.5" fill={color} />

        {/* Bottom terminal */}
        <rect x="10" y="22.5" width="4" height="1.5" fill={color} />

        {/* Lightning bolt - centered in battery */}
        <g transform="translate(7.5, 7.5)">
          <path
            d="M8.69666 0.040354C8.90859 0.131038 9.03105 0.354856 8.99315 0.582235L8.09019 6.00001H12.4999C12.6893 6.00001 12.8625 6.10701 12.9472 6.2764C13.0318 6.44579 13.0136 6.6485 12.8999 6.8L6.89997 14.8C6.76166 14.9844 6.5152 15.0503 6.30327 14.9596C6.09134 14.869 5.96888 14.6451 6.00678 14.4178L6.90974 8.99999H2.49999C2.31061 8.99999 2.13747 8.89299 2.05278 8.7236C1.96808 8.55421 1.98636 8.3515 2.09999 8.2L8.09996 0.200037C8.23827 0.0156255 8.48473 -0.0503301 8.69666 0.040354ZM3.49999 8H7.49996C7.64694 8 7.78647 8.06466 7.88147 8.17681C7.97647 8.28895 8.01732 8.43722 7.99316 8.58219L7.33026 12.5596L11.4999 7H7.49996C7.35299 7 7.21346 6.93534 7.11846 6.82319C7.02346 6.71105 6.98261 6.56278 7.00677 6.41781L7.66967 2.44042L3.49999 8Z"
            fill={color}
            transform="scale(0.6)"
          />
        </g>
      </svg>
    </div>
  );
}

export default MotorStatusIcon;
