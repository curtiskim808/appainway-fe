import React from "react";
import { batteryInfoValueSelector } from "../../recoil/selectors";
import { BatteryInfoType, IndicatorType } from "../../types/dashboard";
import { useRecoilValue } from "recoil";
import Indicator from "../common/Indicator";
import { indicatorStatusSelector } from "../../recoil/selectors";

function BatteryPercentage() {
  const getBatteryInfo = useRecoilValue(batteryInfoValueSelector);
  const getIndicatorStatus = useRecoilValue(indicatorStatusSelector);
  const isCharging = getIndicatorStatus(IndicatorType.BATTERY_CHARGING);
  console.log("BatteryPercentage -> isCharging", isCharging);
  const batteryPercentageValue = getBatteryInfo(BatteryInfoType.TEMPERATURE);

  return (
    <>
      <div className={`max-h-fit place-items-center`}>
        <Indicator
          type={IndicatorType.BATTERY_LOW}
          isIndicator={false}
          isCharging={isCharging}
        />
      </div>
      <div className={`text-dashboard-icon-grey text-sm font-bold text-center`}>
        <p>{batteryPercentageValue}</p>
        <p>%</p>
      </div>
    </>
  );
}

export default BatteryPercentage;
