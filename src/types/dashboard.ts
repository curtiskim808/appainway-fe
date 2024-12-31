export enum IndicatorType {
  BATTERY_CHARGING = "BATTERY_CHARGING",
  BATTERY_LOW = "BATTERY_LOW",
  ENGINE_STATUS = "ENGINE_STATUS",
  MOTOR_STATUS = "MOTOR_STATUS",
  PARKING_BRAKE = "PARKING_BRAKE",
}

export enum MetricType {
  MOTOR_SPEED = "MOTOR_SPEED",
  GEAR_RATIO = "GEAR_RATIO",
  MOTOR_RPM = "MOTOR_RPM",
  POWER_INPUT = "POWER_INPUT",
}

export enum BatteryInfoType {
  REMAINING_CAPACITY = "REMAINING_CAPACITY",
  TEMPERATURE = "TEMPERATURE",
}

export interface Indicator {
  id: number;
  dashboardUuid: string;
  type: IndicatorType;
  status: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface Metric {
  id: number;
  dashboardUuid: string;
  type: MetricType;
  value: number;
  unit: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface BatteryInfo {
  id: number;
  dashboardUuid: string;
  value: number;
  unit: string;
  type: BatteryInfoType;
  createdAt: string;
  updatedAt: string | null;
}

export interface Dashboard {
  uuid: string;
  name: string;
  createdAt: string;
  updatedAt: string | null;
}
