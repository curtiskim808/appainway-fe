import React from "react";
import Indicator from "../common/Indicator";
import useMotorSpeedState from "../../hooks/useMotorSpeedState";

function MotorRPM() {
  const { motorSpeedState } = useMotorSpeedState();
  const { inUsed } = motorSpeedState;
  return (
    <>
      <div className="max-h-fit place-items-center">
        <Indicator type="motor-status" isIndicator={false} inUsed={inUsed} />
      </div>
      <div className="text-dashboard-icon-grey text-sm font-bold text-center">
        <p>22</p>
        <p>%</p>
      </div>
    </>
  );
}

export default MotorRPM;
