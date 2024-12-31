import BatteryTemperatureIcon from "../icons/BatteryTemperatureIcon";
import { colorStatus } from "../../config/constants";

import {
  batteryInfoValueSelector,
  indicatorStatusSelector,
} from "../../recoil/selectors";
import { BatteryInfoType, IndicatorType } from "../../types/dashboard";
import { useRecoilValue } from "recoil";

import { metricValueSelector } from "../../recoil/selectors";
import { MetricType } from "../../types/dashboard";

function BatteryTemperature() {
  const getBatteryInfo = useRecoilValue(batteryInfoValueSelector);
  const batteryTemperatureValue = getBatteryInfo(BatteryInfoType.TEMPERATURE);
  const getMetricValue = useRecoilValue(metricValueSelector);
  const getMotorSpeedValue = getMetricValue(MetricType.MOTOR_SPEED);
  const inUsed = getMotorSpeedValue > 0;
  const getIndicatorStatus = useRecoilValue(indicatorStatusSelector);
  const isCharging = getIndicatorStatus(IndicatorType.BATTERY_CHARGING);

  const color = inUsed ? colorStatus.inUsed : colorStatus.default;
  return (
    <>
      <BatteryTemperatureIcon color={color} />
      <div className="text-dashboard-icon-grey text-sm font-bold text-center">
        <p
          className={`${inUsed ? "text-dashboard-inuse animate-pulse" : ""} ${
            !inUsed && !isCharging ? "animate-pulse" : ""
          }`}
        >
          {Number(batteryTemperatureValue).toFixed(2)}
        </p>
        <p>°C</p>
      </div>
    </>
  );
}

export default BatteryTemperature;
