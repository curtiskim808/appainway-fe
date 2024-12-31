/**
 * MotorRPM component displays the motor RPM (Revolutions Per Minute) value and an indicator
 * showing the motor status. It uses Recoil for state management to fetch the motor RPM and
 * motor speed values.
 *
 * The component consists of:
 * - An Indicator component that shows the motor status based on whether the motor is in use.
 * - A text display showing the motor RPM value and the unit "RPM".
 *
 * The motor is considered "in use" if the motor speed value is greater than 0.
 *
 * @return {JSX.Element} The rendered MotorRPM component.
 */
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
        <p className={`${inUsed ? "text-dashboard-inuse" : ""}`}>
          {Number(motorRpmValue).toFixed(0)}
        </p>
        <p>RPM</p>
      </div>
    </>
  );
}

export default MotorRPM;
