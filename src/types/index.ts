import { IndicatorType, MetricType } from "./dashboard";

export interface IconBaseProps {
  color?: string;
}

export interface GearIconProps {
  letter: "N" | "D" | "P" | "R" | "1" | "2" | "3" | "4" | "5";
}

// Indicators State management
export interface Indicators {
  "parking-brake": boolean;
  "battery-low": boolean;
  "engine-status": boolean;
  "motor-status": boolean;
  "battery-charging": boolean;
}

export interface IndicatorProps {
  type: IndicatorType;
  isIndicator?: boolean;
  isCharging?: boolean;
  inUsed?: boolean;
}
// Gauge State management
export interface Gauge {
  POWER_INPUT: number;
  MOTOR_RPM: number;
}

export type GaugeType = MetricType.MOTOR_RPM | MetricType.POWER_INPUT;

interface GaugeConfig {
  min: number;
  max: number;
  unit: string;
  steps: number[];
  labelFormatter?: (value: number) => string;
  startAngle?: number;
  endAngle?: number;
}

export const GAUGE_CONFIGS: Record<GaugeType, GaugeConfig> = {
  POWER_INPUT: {
    min: -1000,
    max: 1000,
    unit: "kW",
    steps: [-1000, -750, -500, -250, 0, 250, 500, 750, 1000],
    labelFormatter: (value: number) => `${value >= 0 ? "+" : ""}${value}`,
    startAngle: -240,
    endAngle: 60,
  },
  MOTOR_RPM: {
    min: 0,
    max: 800,
    unit: "RPM",
    steps: [0, 100, 200, 300, 400, 500, 600, 700, 800],
    startAngle: -240,
    endAngle: 60,
  },
};

export interface GaugeProps {
  type: GaugeType;
}

// Gearr Ratio State management
export interface GearRatio {
  gearRep: string;
  ratio: number;
}

export interface MotorSpeed {
  motorSpeed: number;
  inUsed: boolean;
}

export const gearMap: { [key: string]: string } = {
  "-1": "R",
  "0": "N",
  "1": "1",
  "2": "2",
  "3": "D",
  "4": "4",
  "5": "5",
  "6": "P",
};
