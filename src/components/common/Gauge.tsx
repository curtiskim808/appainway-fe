import React from "react";
import { GaugeProps, GAUGE_CONFIGS } from "../../types";
import useGauges from "../../hooks/useGauges";

function Gauge({ type }: GaugeProps) {
  const { gauges } = useGauges();
  const value = gauges[type];

  const config = {
    ...GAUGE_CONFIGS[type],
  };

  const {
    min,
    max,
    unit,
    steps,
    labelFormatter,
    startAngle = 0,
    endAngle = 180,
  } = config;

  const displayValue = labelFormatter ? labelFormatter(value) : value;

  const getRotation = (value: number) => {
    value = Math.min(Math.max(value, min), max);
    const normalizedValue = (value - min) / (max - min);
    return startAngle + normalizedValue * (endAngle - startAngle);
  };

  const rotation = getRotation(value);
  console.log(type, " ", "value: ", value, "rotation: ", rotation);

  return (
    <div className="w-64 h-64 relative">
      {/* Gauge Background */}
      <div className="w-full h-full rounded-full bg-dashboard-icon-grey shadow-lg">
        {/* Gauge Scale */}
        <div className="absolute inset-2.5 rounded-full bg-gradient-to-br to-dashboard-grey from-gray-500 shadow-lg">
          {/* Numbers around the gauge */}
          {steps.map((number) => {
            const angle = getRotation(number);
            const radians = (angle * Math.PI) / 180;
            const x = 50 + 45 * Math.cos(radians);
            const y = 50 + 45 * Math.sin(radians);

            return (
              <div
                key={number}
                className="absolute text-gray-400 text-xs"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {labelFormatter ? labelFormatter(number) : number}
              </div>
            );
          })}

          {/* Needle */}
          <div
            className="absolute w-1 h-28 bg-white origin-bottom rounded-full"
            style={{
              left: "50%",
              bottom: "50%",
              transform: `translateX(-50%) rotate(${rotation + 90}deg)`,
              transformOrigin: "bottom center",
              transition: "transform 0.3s ease-out",
            }}
          />

          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 w-6 h-6 -ml-3 -mt-3 bg-dashboard-icon-grey rounded-full" />

          {/* Value Display */}
          <div className="absolute left-1/2 top-3/4 -translate-x-1/2 text-white text-xl text-center">
            {displayValue}
            <div className="text-sm text-gray-400 text-center">{unit}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gauge;
