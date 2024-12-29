import React, { useState } from "react";
import { indicatorObjSelector } from "../../recoil/selectors";
import { useRecoilValue } from "recoil";
import { IndicatorType } from "../../types/dashboard";
import { useIndicators } from "../../hooks/useIndicators";

function BatteryChargingButton() {
  const getIndicatorObj = useRecoilValue(indicatorObjSelector);
  const batteryChargingIndicator = getIndicatorObj(
    IndicatorType.BATTERY_CHARGING
  );

  const [isCharging, setisCharging] = useState(batteryChargingIndicator.status);
  const { saveIndicatorToDb, setIndicatorsState } = useIndicators();

  const handleClick = () => {
    setisCharging(!isCharging);
    saveIndicatorToDb(
      batteryChargingIndicator.dashboardUuid,
      batteryChargingIndicator.id,
      IndicatorType.BATTERY_CHARGING,
      !isCharging
    );
    setIndicatorsState(
      batteryChargingIndicator.dashboardUuid,
      batteryChargingIndicator.id,
      IndicatorType.BATTERY_CHARGING,
      !isCharging
    );
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-3xl"
      aria-pressed={isCharging}
      aria-label={isCharging ? "Stop Charging" : "Start Charging"}
    >
      <img
        className={`rounded-3xl transition-transform ${
          isCharging
            ? "transform animate-pulseColor border-4 border-green-200"
            : ""
        }`}
        src="/src/assets/engine-charging.png"
        alt={isCharging ? "Charging" : "Not Charging"}
      />
    </button>
  );
}

export default BatteryChargingButton;
