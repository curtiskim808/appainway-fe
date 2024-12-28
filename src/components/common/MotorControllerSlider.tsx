import React, { useState } from "react";
import { Slider } from "@nextui-org/react";

function MotorControllerSlider() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Slider
        className="max-w-sm text-dashboard-white"
        defaultValue={0}
        showOutline={true}
        color="foreground"
        marks={[
          {
            value: 0,
            label: "OFF",
          },
          {
            value: 1,
            label: "1",
          },
          {
            value: 2,
            label: "2",
          },
          {
            value: 3,
            label: "3",
          },
          {
            value: 4,
            label: "4",
          },
        ]}
        maxValue={4}
        minValue={0}
        showTooltip={true}
        step={0.1}
        onChangeEnd={setValue}
      />
      <span className="text-white text-sm font-bold text-center">{value}</span>
    </>
  );
}

export default MotorControllerSlider;
