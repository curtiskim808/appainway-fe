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
