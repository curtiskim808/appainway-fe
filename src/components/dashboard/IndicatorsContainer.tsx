import Indicator from "../common/Indicator";
import { IndicatorType } from "../../types/dashboard";

function IndicatorsContainer() {
  return (
    <div className="grid grid-cols-12 gap-0.4 place-content-start border-t-3 border-l-3 border-r-3 border-gray-600">
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-items-center place-content-evenly">
        <Indicator type={IndicatorType.PARKING_BRAKE} isIndicator={true} />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-items-center place-content-evenly">
        <Indicator type={IndicatorType.ENGINE_STATUS} isIndicator={true} />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-items-center place-content-evenly">
        <Indicator type={IndicatorType.MOTOR_STATUS} isIndicator={true} />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-items-center place-content-evenly">
        <Indicator type={IndicatorType.BATTERY_LOW} isIndicator={true} />
      </div>
    </div>
  );
}

export default IndicatorsContainer;
