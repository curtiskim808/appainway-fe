import React from "react";
import BatteryTemperatureIcon from "../icons/BatteryTemperatureIcon";
import useMotorSpeedState from "../../hooks/useMotorSpeedState";
import { colorStatus } from "../../config/constants";
function BatteryTemperature() {
  const { motorSpeedState } = useMotorSpeedState();
  const { inUsed } = motorSpeedState;

  const color = inUsed ? colorStatus.inUsed : colorStatus.default;
  return (
    <>
      <BatteryTemperatureIcon color={color} />
      <div className="text-dashboard-icon-grey text-sm font-bold text-center">
        <p>22</p>
        <p>°C</p>
      </div>
    </>
  );
}

export default BatteryTemperature;
