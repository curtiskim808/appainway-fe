import { atom } from "recoil";
import { Dashboard, Indicator, Metric, BatteryInfo } from "../types/dashboard";

export const dashboardState = atom<Dashboard | null>({
  key: "dashboardState",
  default: null,
});

export const indicatorsState = atom<Indicator[]>({
  key: "indicatorsState",
  default: [],
});

export const metricsState = atom<Metric[]>({
  key: "metersState",
  default: [],
});

export const batteryInfoState = atom<BatteryInfo[]>({
  key: "batteryInfoState",
  default: [],
});
