import React from "react";
import Gauge from "../common/Gauge";

function GaugesContainer() {
  return (
    <div className="bg-dashboard-grey gap-0.4 border-gray-600 border-t-3 border-l-3 border-r-3">
      <div className="grid grid-cols-2 place-items-center">
        <div className="grid grid-cols-1 place-content-center p-4">
          <Gauge type="power-input" />
        </div>
        <div className="grid grid-cols-1 place-content-center p-4">
          <Gauge type="motor-rpm" />
        </div>
      </div>
    </div>
  );
}

export default GaugesContainer;
