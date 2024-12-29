import React from "react";
import {
  batteryInfoObjSelector,
  batteryInfoValueSelector,
  indicatorObjSelector,
} from "../../recoil/selectors";
import { BatteryInfoType, IndicatorType } from "../../types/dashboard";
import { useRecoilValue } from "recoil";
import Indicator from "../common/Indicator";
import { indicatorStatusSelector } from "../../recoil/selectors";
import { useIndicators } from "../../hooks/useIndicators";

const LOW_BATTERY_THRESHOLD = 20;
function BatteryPercentage() {
  const getBatteryInfo = useRecoilValue(batteryInfoValueSelector);
  const getIndicatorStatus = useRecoilValue(indicatorStatusSelector);
  const isCharging = getIndicatorStatus(IndicatorType.BATTERY_CHARGING);
  const batteryPercentageValue = getBatteryInfo(
    BatteryInfoType.REMAINING_CAPACITY
  );

  const getindicatorObj = useRecoilValue(indicatorObjSelector);
  const indicatorObj = getindicatorObj(IndicatorType.BATTERY_LOW);

  const { saveIndicatorToDb, setIndicatorsState } = useIndicators();
  if (batteryPercentageValue <= LOW_BATTERY_THRESHOLD && !indicatorObj.status) {
    saveIndicatorToDb(
      indicatorObj.dashboardUuid,
      indicatorObj.id,
      IndicatorType.BATTERY_LOW,
      !indicatorObj.status
    );
    setIndicatorsState(
      indicatorObj.dashboardUuid,
      indicatorObj.id,
      IndicatorType.BATTERY_LOW,
      !indicatorObj.status
    );
  } else if (
    batteryPercentageValue > LOW_BATTERY_THRESHOLD &&
    indicatorObj.status
  ) {
    saveIndicatorToDb(
      indicatorObj.dashboardUuid,
      indicatorObj.id,
      IndicatorType.BATTERY_LOW,
      !indicatorObj.status
    );
    setIndicatorsState(
      indicatorObj.dashboardUuid,
      indicatorObj.id,
      IndicatorType.BATTERY_LOW,
      !indicatorObj.status
    );
  }

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
        <p>{Number(batteryPercentageValue).toFixed(2)}</p>
        <p>%</p>
      </div>
    </>
  );
}

export default BatteryPercentage;
