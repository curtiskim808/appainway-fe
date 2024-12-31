/**
 * MotorControllerSlider is a React functional component that renders a slider
 * to control the motor speed of a vehicle. The slider is disabled when the battery
 * is charging or when the battery's remaining capacity is zero. The component
 * uses Recoil for state management and hooks for side effects.
 *
 * The component performs the following:
 * - Initializes the slider value to 0.
 * - Disables the slider and shows a warning message when the battery is charging or empty.
 * - Saves the motor speed metric to the database and updates the metrics state whenever the slider value changes.
 *
 * @returns {JSX.Element} The MotorControllerSlider component
 */
import { useState, useEffect } from "react";
import { Slider } from "@nextui-org/react";
import useMetrics from "../../hooks/useMetrics";
import {
  BatteryInfoType,
  IndicatorType,
  MetricType,
} from "../../types/dashboard";
import { useRecoilValue } from "recoil";
import {
  batteryInfoValueSelector,
  indicatorStatusSelector,
  metricObjSelector,
} from "../../recoil/selectors";
import { dashboardState } from "../../recoil/atoms";

function MotorControllerSlider() {
  const [value, setValue] = useState(0);
  const getIndicatorStatus = useRecoilValue(indicatorStatusSelector);
  const isCharging = getIndicatorStatus(IndicatorType.BATTERY_CHARGING);
  const { saveMetricToDb, setMetricsState } = useMetrics();
  const dashboard = useRecoilValue(dashboardState);
  const dashboardUuid = dashboard?.uuid || "";
  const getMetricObj = useRecoilValue(metricObjSelector);
  const motorSpeedMetric = getMetricObj(MetricType.MOTOR_SPEED);
  const getBatteryInfoValue = useRecoilValue(batteryInfoValueSelector);
  const batteryRemainingCapacity = getBatteryInfoValue(
    BatteryInfoType.REMAINING_CAPACITY
  );

  useEffect(() => {
    if (isCharging) {
      setValue(0);
    }
    if (batteryRemainingCapacity === 0) {
      setValue(0);
    }
  }, [isCharging, batteryRemainingCapacity]);

  useEffect(() => {
    saveMetricToDb(
      dashboardUuid,
      motorSpeedMetric.id,
      MetricType.MOTOR_SPEED,
      value,
      motorSpeedMetric.unit
    );
    setMetricsState(
      motorSpeedMetric.id,
      MetricType.MOTOR_SPEED,
      value,
      motorSpeedMetric.unit
    );
  }, [value]);

  return (
    <>
      <div className="relative grid max-w-fit place-items-center">
        <span
          className={`absolute top-1/2 w-80 text-opacity-80 text-dashboard-warning font-medium text-small ${
            isCharging || batteryRemainingCapacity === 0 ? "" : "hidden"
          }`}
        >
          Not Available when charging or battery is empty
        </span>
      </div>

      <Slider
        aria-labelledby="motor-speed-slider"
        key={isCharging ? "charging" : "not-charging"}
        className="max-w-sm text-dashboard-white pt-4"
        isDisabled={isCharging || batteryRemainingCapacity === 0}
        defaultValue={0}
        showOutline={true}
        color="foreground"
        marks={[
          {
            value: 0,
            label: "OFF",
          },
          {
            value: 1,
            label: "1",
          },
          {
            value: 2,
            label: "2",
          },
          {
            value: 3,
            label: "3",
          },
          {
            value: 4,
            label: "4",
          },
        ]}
        maxValue={4}
        minValue={0}
        showTooltip={true}
        step={0.1}
        onChangeEnd={(val) => setValue(Array.isArray(val) ? val[0] : val)}
      />
      <span className="text-white text-sm font-bold text-center">{value}</span>
    </>
  );
}

export default MotorControllerSlider;
