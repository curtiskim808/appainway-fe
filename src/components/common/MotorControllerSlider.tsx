import React, { useState, useEffect } from "react";
import { Slider } from "@nextui-org/react";
import useMetrics from "../../hooks/useMetrics";
import { IndicatorType, MetricType } from "../../types/dashboard";
import { useRecoilValue } from "recoil";
import {
  indicatorStatusSelector,
  metricObjSelector,
} from "../../recoil/selectors";
import { dashboardState } from "../../recoil/atoms";

function MotorControllerSlider() {
  const [value, setValue] = useState(0);
  const getIndicatorStatus = useRecoilValue(indicatorStatusSelector);
  const isCharging = getIndicatorStatus(IndicatorType.BATTERY_CHARGING);
  const { updateMetric } = useMetrics();
  const dashboard = useRecoilValue(dashboardState);
  const dashboardUuid = dashboard?.uuid || "";
  const getMetricObj = useRecoilValue(metricObjSelector);
  const motorSpeedMetric = getMetricObj(MetricType.MOTOR_SPEED);

  useEffect(() => {
    if (isCharging) {
      setValue(0);
    }
  }, [isCharging]);

  useEffect(() => {
    setValue(value);
    updateMetric(
      dashboardUuid,
      motorSpeedMetric.id,
      MetricType.MOTOR_SPEED,
      value,
      motorSpeedMetric.unit
    );
  }, [value]);

  return (
    <>
      <Slider
        key={isCharging ? "charging" : "not-charging"}
        className="max-w-sm text-dashboard-white"
        isDisabled={isCharging}
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
