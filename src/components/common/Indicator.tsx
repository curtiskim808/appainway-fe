import React from "react";
import { IndicatorProps } from "../../types";
import useIndicators from "../../hooks/useIndicators";
import CheckEngineIcon from "../icons/CheckEngineIcon";
import ParkingBrakeIcon from "../icons/ParkingBrakeIcon";
import MotorStatusIcon from "../icons/MotorStatusIcon";
import BatteryLowIcon from "../icons/BatteryLowIcon";
import { colorStatus } from "../../config/constants";

function Indicator({ type, isIndicator, isCharging, inUsed }: IndicatorProps) {
  const { indicators } = useIndicators();
  const status = indicators[type];

  const getIndicatorColor = (status: boolean) => {
    if (isIndicator) {
      return isIndicator && status ? colorStatus.error : colorStatus.default;
    } else if (isCharging) {
      return colorStatus.charging;
    } else if (inUsed) {
      return colorStatus.inUsed;
    } else {
      return colorStatus.default;
    }
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
