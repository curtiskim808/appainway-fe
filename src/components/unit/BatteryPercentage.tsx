import {
  batteryInfoValueSelector,
  indicatorObjSelector,
  metricValueSelector,
} from "../../recoil/selectors";
import {
  BatteryInfoType,
  IndicatorType,
  MetricType,
} from "../../types/dashboard";
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
  const getMetricValue = useRecoilValue(metricValueSelector);
  const moterSpeed = getMetricValue(MetricType.MOTOR_SPEED);
  const inUsed = moterSpeed > 0;

  const { saveIndicatorToDb, setIndicatorsState } = useIndicators();
  if (batteryPercentageValue <= LOW_BATTERY_THRESHOLD && !indicatorObj.status) {
    saveIndicatorToDb(
      indicatorObj.dashboardUuid,
      indicatorObj.id,
      IndicatorType.BATTERY_LOW,
      !indicatorObj.status
    );
    setIndicatorsState(
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
          inUsed={inUsed}
        />
      </div>
      <div className={`text-dashboard-icon-grey text-sm font-bold text-center`}>
        <p
          className={`${
            isCharging ? "text-dashboard-charging animate-pulse" : ""
          }
          ${moterSpeed > 0 ? "text-dashboard-inuse animate-pulse" : ""}`}
        >
          {Number(batteryPercentageValue).toFixed(2)}
        </p>
        <p>%</p>
      </div>
    </>
  );
}

export default BatteryPercentage;
