import { selector } from "recoil";
import { indicatorsState, metricsState, batteryInfoState } from "./atoms";
import { IndicatorType, MetricType, BatteryInfoType } from "../types/dashboard";
import { Indicator, Metric, BatteryInfo } from "../types/dashboard";

const DEFAULT_INDICATOR: Indicator = {
  id: 0,
  dashboardUuid: "",
  type: IndicatorType.MOTOR_STATUS,
  status: false,
  createdAt: "",
  updatedAt: null,
};

const DEFAULT_METRIC: Metric = {
  id: 0,
  dashboardUuid: "",
  type: MetricType.MOTOR_SPEED,
  value: 0,
  unit: "",
  createdAt: "",
  updatedAt: null,
};

const DEFAULT_BATTERY_INFO: BatteryInfo = {
  id: 0,
  dashboardUuid: "",
  type: BatteryInfoType.TEMPERATURE,
  value: 0,
  unit: "",
  createdAt: "",
  updatedAt: null,
};

/**
 * Selector to get the statue of a specific indicator type.
 */
export const indicatorStatusSelector = selector({
  key: "indicatorStatusSelector",
  get: ({ get }) => {
    const indicators = get(indicatorsState);
    return (type: IndicatorType) =>
      indicators.find((indicator) => indicator.type === type)?.status || false;
  },
});

/**
 * Selector to get the value of a specific metric type.
 */
export const metricValueSelector = selector({
  key: "metricValueSelector",
  get: ({ get }) => {
    const metrics = get(metricsState);
    return (type: MetricType) =>
      metrics.find((metric) => metric.type === type)?.value || 0;
  },
});

/**
 * Selector to get the value of a specific battery info type.
 */
export const batteryInfoValueSelector = selector({
  key: "batteryInfoSelector",
  get: ({ get }) => {
    const batteryInfo = get(batteryInfoState);
    return (type: BatteryInfoType) =>
      batteryInfo.find((info) => info.type === type)?.value || 0;
  },
});

/**
 * Selector to get the indicator object of a specific type.
 */
export const indicatorObjSelector = selector({
  key: "indicatorObjSelector",
  get: ({ get }) => {
    const indicators = get(indicatorsState);
    return (type: IndicatorType): Indicator =>
      indicators.find((indicator) => indicator.type === type) || {
        ...DEFAULT_INDICATOR,
        type,
      };
  },
});

/**
 * Selector to get the metric object of a specific type.
 */
export const metricObjSelector = selector({
  key: "metricObjSelector",
  get: ({ get }) => {
    const metrics = get(metricsState);
    return (type: MetricType): Metric =>
      metrics.find((metric) => metric.type === type) || {
        ...DEFAULT_METRIC,
        type,
      };
  },
});

/**
 * Selector to get the battery info object of a specific type.
 */
export const batteryInfoObjSelector = selector({
  key: "batteryInfoObjSelector",
  get: ({ get }) => {
    const batteryInfo = get(batteryInfoState);
    return (type: BatteryInfoType): BatteryInfo =>
      batteryInfo.find((info) => info.type === type) || {
        ...DEFAULT_BATTERY_INFO,
        type,
      };
  },
});
