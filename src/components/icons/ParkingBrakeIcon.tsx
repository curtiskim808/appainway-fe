/**
 * ParkingBrake component renders an SVG icon representing a parking brake.
 * The icon consists of two outer arcs, inner circles, and a centered "P" text.
 * The color of the icon can be customized via the `color` prop.
 *
 * @param {IconBaseProps} props - The properties for the ParkingBrake component.
 * @param {string} props.color - The color to be applied to the SVG elements.
 * @returns {JSX.Element} The rendered ParkingBrake icon.
 */
import { IconBaseProps } from "../../types";

function ParkingBrake({ color }: IconBaseProps) {
  return (
    <svg width="80%" height="80%" viewBox="0 0 512.009 512.009" fill="none">
      {/* Outer right arc */}
      <path
        d="M437.024,74.984c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17c83.317,83.317,83.317,218.394,0.002,301.69
      c-8.332,8.33-8.334,21.838-0.003,30.17c8.33,8.332,21.838,8.334,30.17,0.003C537.004,337.059,537.004,174.964,437.024,74.984z"
        fill={color}
      />

      {/* Outer left arc */}
      <path
        d="M105.153,105.165c8.332-8.33,8.334-21.838,0.003-30.17c-8.33-8.332-21.838-8.334-30.17-0.004
      c-99.981,99.958-99.981,262.054-0.002,362.033c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17
      C21.838,323.538,21.838,188.46,105.153,105.165z"
        fill={color}
      />

      {/* Inner circles */}
      <path
        d="M256.004,85.338c-94.257,0-170.667,76.41-170.667,170.667s76.41,170.667,170.667,170.667s170.667-76.41,170.667-170.667
      S350.261,85.338,256.004,85.338z M256.004,384.004c-70.693,0-128-57.307-128-128s57.307-128,128-128s128,57.307,128,128
      S326.697,384.004,256.004,384.004z"
        fill={color}
      />

      {/* Centered text P */}
      <text
        x="256"
        y="280"
        fill={color}
        fontSize="180"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Arial, sans-serif"
      >
        P
      </text>
    </svg>
  );
}

export default ParkingBrake;
