import React from "react";
import Indicator from "../common/Indicator";
import { metricValueSelector } from "../../recoil/selectors";
import { IndicatorType, MetricType } from "../../types/dashboard";
import { useRecoilValue } from "recoil";

function MotorRPM() {
  const getMetricValue = useRecoilValue(metricValueSelector);
  const motorRpmValue = getMetricValue(MetricType.MOTOR_RPM);
  const getMotorSpeedValue = getMetricValue(MetricType.MOTOR_SPEED);
  const inUsed = getMotorSpeedValue > 0;

  return (
    <>
      <div className="max-h-fit place-items-center">
        <Indicator
          type={IndicatorType.MOTOR_STATUS}
          isIndicator={false}
          inUsed={inUsed}
        />
      </div>
      <div className="text-dashboard-icon-grey text-sm font-bold text-center">
        <p>{Number(motorRpmValue).toFixed(0)}</p>
        <p>RPM</p>
      </div>
    </>
  );
}

export default MotorRPM;
