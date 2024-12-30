import React from "react";
import MotorControllerSlider from "../common/MotorControllerSlider";
import BatteryPercentage from "../unit/BatteryPercentage";
import BatteryTemperature from "../unit/BatteryTemperature";
import MotorRPM from "../unit/MotorRPM";
import GearRatio from "../unit/GearRatio";

function DataRow() {
  return (
    <div className="grid grid-cols-7 gap-0.4 border-gray-600 border-t-3 border-l-3 border-r-3">
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-content-center">
        {/* Replace Gear Ratio */}
        <GearRatio />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-content-center">
        <BatteryPercentage />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-content-center">
        {/* Replace BatteryTemperatureComponent */}
        <BatteryTemperature />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-content-center">
        {/* Replace with Battery RPM Component */}
        <MotorRPM />
      </div>
      <div className="bg-dashboard-black border border-gray-600 p-4 rounded-lg grid-cols-1 col-span-3">
        <div className="grid grid-cols-1 place-content-center place-items-center">
          <span className="text-white text-l font-bold">
            MOTOR SPEED SETTING
          </span>
          <MotorControllerSlider />
        </div>
      </div>
    </div>
  );
}

export default DataRow;
