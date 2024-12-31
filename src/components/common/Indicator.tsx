/**
 * Indicator component that renders different icons based on the type of indicator.
 * It uses Recoil for state management to get the status of the indicator.
 * The color of the icon is determined by the status and other props such as `isIndicator`, `isCharging`, and `inUsed`.
 *
 * @param {IndicatorProps} props - The properties for the Indicator component.
 * @param {IndicatorType} props.type - The type of the indicator to be displayed.
 * @param {boolean} props.isIndicator - Flag to determine if the indicator is active.
 * @param {boolean} props.isCharging - Flag to determine if the vehicle is charging.
 * @param {boolean} props.inUsed - Flag to determine if the vehicle is in use.
 *
 * @returns {JSX.Element | null} The corresponding icon component based on the indicator type and status, or null if the type is not recognized.
 */
import { IndicatorProps } from "../../types";
import CheckEngineIcon from "../icons/CheckEngineIcon";
import ParkingBrakeIcon from "../icons/ParkingBrakeIcon";
import MotorStatusIcon from "../icons/MotorStatusIcon";
import BatteryLowIcon from "../icons/BatteryLowIcon";
import { colorStatus } from "../../config/constants";
import { useRecoilValue } from "recoil";
import { indicatorObjSelector } from "../../recoil/selectors";
import { IndicatorType } from "../../types/dashboard";

function Indicator({ type, isIndicator, isCharging, inUsed }: IndicatorProps) {
  const getIndicatorObj = useRecoilValue(indicatorObjSelector);
  const indicatorObj = getIndicatorObj(type);
  const status = indicatorObj.status;

  const getIndicatorColor = (status: boolean) => {
    if (isIndicator) {
      return isIndicator && status ? colorStatus.error : colorStatus.default;
    } else if (isCharging) {
      return colorStatus.charging;
    } else if (inUsed) {
      return colorStatus.inUsed;
    } else {
      return colorStatus.default;
    }
  };

  switch (type) {
    case IndicatorType.ENGINE_STATUS:
      return <CheckEngineIcon color={getIndicatorColor(status)} />;
    case IndicatorType.PARKING_BRAKE:
      return <ParkingBrakeIcon color={getIndicatorColor(status)} />;
    case IndicatorType.MOTOR_STATUS:
      return <MotorStatusIcon color={getIndicatorColor(status)} />;
    case IndicatorType.BATTERY_LOW:
      return <BatteryLowIcon color={getIndicatorColor(status)} />;
    default:
      return null;
  }
}

export default Indicator;
