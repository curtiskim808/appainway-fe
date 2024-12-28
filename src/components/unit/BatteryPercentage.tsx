import React from "react";
import useBatteryChargingState from "../../hooks/useBatteryChargingState";
import Indicator from "../common/Indicator";

function BatteryPercentage() {
  const { isCharging } = useBatteryChargingState();

  return (
    <>
      <div className={`max-h-fit place-items-center`}>
        <Indicator
          type="battery-low"
          isIndicator={false}
          isCharging={isCharging}
        />
      </div>
      <div className={`text-dashboard-icon-grey text-sm font-bold text-center`}>
        <p>22</p>
        <p>%</p>
      </div>
    </>
  );
}

export default BatteryPercentage;
