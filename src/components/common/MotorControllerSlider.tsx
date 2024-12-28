import React, { useState, useEffect } from "react";
import { Slider } from "@nextui-org/react";
import useBatteryChargingState from "../../hooks/useBatteryChargingState";
import useMotorSpeedState from "../../hooks/useMotorSpeedState";

function MotorControllerSlider() {
  const [value, setValue] = useState(0);
  const { isCharging } = useBatteryChargingState();
  const { updateMotorSpeedStateState } = useMotorSpeedState();

  useEffect(() => {
    if (isCharging) {
      setValue(0);
    }
  }, [isCharging]);

  useEffect(() => {
    setValue(value);
    if (value > 0) {
      updateMotorSpeedStateState({ motorSpeed: value, inUsed: true });
    } else {
      updateMotorSpeedStateState({ motorSpeed: value, inUsed: false });
    }
  }, [value]);

  return (
    <>
      <Slider
        key={isCharging ? "charging" : "not-charging"}
        className="max-w-sm text-dashboard-white"
        isDisabled={isCharging}
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
        onChangeEnd={(val) => setValue(Array.isArray(val) ? val[0] : val)}
      />
      <span className="text-white text-sm font-bold text-center">{value}</span>
    </>
  );
}

export default MotorControllerSlider;
