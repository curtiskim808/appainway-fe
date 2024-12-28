import React from "react";
import GearIcon from "../icons/GearIcon";
import Indicator from "../common/Indicator";
import BatteryTemperatureIcon from "../icons/BatteryTemperatureIcon";
import MotorControllerSlider from "../common/MotorControllerSlider";

function DataRow() {
  return (
    <div className="grid grid-cols-7 gap-0.4 border-gray-600 border-t-3 border-l-3 border-r-3">
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 gear-ratio place-content-center">
        {/* Replace Gear Ratio */}
        <GearIcon letter="N" />
        <div className="text-dashboard-icon-grey text-sm font-bold text-center pt-5">
          N/N
        </div>
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-content-center">
        {/* Replace Battery Low */}
        <div className="max-h-fit place-items-center">
          <Indicator type="battery-low" statusNeeded={false} />
        </div>
        <div className="text-dashboard-icon-grey text-sm font-bold text-center">
          <p>22</p>
          <p>%</p>
        </div>
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-content-center">
        {/* Replace BatteryTemperatureComponent */}
        <BatteryTemperatureIcon />
        <div className="text-dashboard-icon-grey text-sm font-bold text-center">
          <p>22</p>
          <p>°C</p>
        </div>
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-content-center">
        {/* Replace with Battery RPM Component */}
        <div className="max-h-fit place-items-center">
          <Indicator type="motor-status" statusNeeded={false} />
        </div>
        <div className="text-dashboard-icon-grey text-sm font-bold text-center">
          <p>22</p>
          <p>%</p>
        </div>
      </div>
      <div className="bg-dashboard-black border border-gray-600 p-4 rounded-lg grid-cols-1 col-span-3">
        <div className="grid grid-cols-1 place-content-center place-items-center">
          <span className="text-white text-l font-bold pb-10">
            MOTOR SPEED SETTING
          </span>
          <MotorControllerSlider />
        </div>
      </div>
    </div>
  );
}

export default DataRow;
