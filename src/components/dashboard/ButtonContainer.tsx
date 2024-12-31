import GearIcon from "../icons/GearIcon";
import Indicator from "../common/Indicator";
import BatteryTemperatureIcon from "../icons/BatteryTemperatureIcon";
import { IndicatorType, MetricType } from "../../types/dashboard";
import BatteryChargingButton from "../unit/BatteryChargingButton";
import { useRecoilValue } from "recoil";
import { metricValueSelector } from "../../recoil/selectors";
import { gearMap } from "../../types";

function ButtonContainer() {
  const getMetricValue = useRecoilValue(metricValueSelector);
  const gearRatioValue = getMetricValue(MetricType.GEAR_RATIO);
  const gearLetter: string = gearMap[String(gearRatioValue)] || "N";
  return (
    <>
      <div className="grid grid-cols-9 gap-0.4 border-gray-600 border-b-3 border-l-3 border-r-3">
        <button className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1">
          <GearIcon letter={gearLetter} />
        </button>
        <button className="bg-dashboard-black border border-gray-600 rounded-lg col-start-2 col-end-2">
          <Indicator type={IndicatorType.MOTOR_STATUS} />
        </button>
        <button className="bg-dashboard-black border border-gray-600 rounded-lg col-start-3 col-end-3">
          <BatteryTemperatureIcon />
        </button>

        <div className="bg-dashboard-black border border-gray-600 rounded-lg col-start-5 col-end-5 place-content-center">
          <button className="max-w-full max-h-fit pt-1">
            <img className="rounded-3xl" src="/src/assets/page-button.png" />
          </button>
        </div>

        <div className="bg-dashboard-black border border-gray-600 p-4 rounded-lg col-start-9 col-end-9">
          <BatteryChargingButton />
        </div>
      </div>
    </>
  );
}

export default ButtonContainer;
