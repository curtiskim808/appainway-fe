import { atom } from "recoil";
import { Indicators, Gauge } from "../types";

export const indicatorsAtom = atom<Indicators>({
  key: "indicatorsState",
  default: {
    "parking-brake": false,
    "battery-low": false,
    "check-engine": false,
    "motor-status": false,
  },
});

export const gaugesAtom = atom<Gauge>({
  key: "gaugesState",
  default: {
    "power-input": 0,
    "motor-rpm": 0,
  },
});
