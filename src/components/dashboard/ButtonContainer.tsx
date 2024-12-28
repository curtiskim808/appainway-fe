import React from "react";
import GearIcon from "../icons/GearIcon";
import Indicator from "../common/Indicator";
import BatteryTemperatureIcon from "../icons/BatteryTemperatureIcon";

function ButtonContainer() {
  return (
    <>
      <div className="grid grid-cols-9 gap-0.4 border-gray-600 border-b-3 border-l-3 border-r-3">
        <div className="bg-dashboard-black border border-gray-600 p-4 rounded-lg col-start-1 col-end-1">
          <button>
            <GearIcon letter="N" />
          </button>
        </div>
        <div className="bg-dashboard-black border border-gray-600 p-4 rounded-lg col-start-2 col-end-2">
          <div className="max-h-fit place-items-center -m-2">
            <button>
              <Indicator type="motor-status" />
            </button>
          </div>
        </div>
        <div className="bg-dashboard-black border border-gray-600 p-4 rounded-lg col-start-3 col-end-3">
          <button className="place-items-center">
            <BatteryTemperatureIcon />
          </button>
        </div>

        <div className="bg-dashboard-black border border-gray-600 rounded-lg col-start-5 col-end-5 place-content-center">
          <button className="max-w-full max-h-fit pt-1">
            <img
              className="rounded-3xl"
              src="/src/assets/page-button.png"
              alt=""
            />
          </button>
        </div>

        <div className="bg-dashboard-black border border-gray-600 p-4 rounded-lg col-start-9 col-end-9">
          <button className="max-w-full max-h-fit pt-1">
            <img
              className="rounded-3xl"
              src="/src/assets/engine-charging.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonContainer;
