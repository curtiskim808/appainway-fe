import React from "react";
import Indicator from "../common/Indicator";

function IndicatorsContainer() {
  return (
    <div className="grid grid-cols-12 gap-0.4 place-content-start border-t-3 border-l-3 border-r-3 border-gray-600">
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-items-center place-content-evenly">
        <Indicator type="parking-brake" statusNeeded={true} />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-items-center place-content-evenly">
        <Indicator type="check-engine" statusNeeded={true} />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-items-center place-content-evenly">
        <Indicator type="motor-status" statusNeeded={true} />
      </div>
      <div className="bg-dashboard-black border border-gray-600 rounded-lg grid-cols-1 place-items-center place-content-evenly">
        <Indicator type="battery-low" statusNeeded={true} />
      </div>
    </div>
  );
}

export default IndicatorsContainer;
