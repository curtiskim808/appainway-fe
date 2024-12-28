import React from "react";
import { IndicatorProps } from "../../types";
import useIndicators from "../../hooks/useIndicators";
import CheckEngineIcon from "../icons/CheckEngineIcon";
import ParkingBrakeIcon from "../icons/ParkingBrakeIcon";
import MotorStatusIcon from "../icons/MotorStatusIcon";
import BatteryLowIcon from "../icons/BatteryLowIcon";

function Indicator({ type, statusNeeded }: IndicatorProps) {
  const { indicators } = useIndicators();
  const status = indicators[type];

  const getIndicatorColor = (status: boolean) => {
    return statusNeeded && status ? "#FF0000" : "#808080";
  };

  switch (type.toLowerCase()) {
    case "check-engine":
      return <CheckEngineIcon color={getIndicatorColor(status)} />;
    case "parking-brake":
      return <ParkingBrakeIcon color={getIndicatorColor(status)} />;
    case "motor-status":
      return <MotorStatusIcon color={getIndicatorColor(status)} />;
    case "battery-low":
      return <BatteryLowIcon color={getIndicatorColor(status)} />;
    default:
      return null;
  }
}

export default Indicator;
