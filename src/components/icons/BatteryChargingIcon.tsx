import React from "react";
import useBatteryChargingState from "../../hooks/useBatteryChargingState";

function BatteryChargingButton() {
  const { isCharging, updateBatteryChargingState } = useBatteryChargingState();

  const handleClick = () => {
    updateBatteryChargingState(!isCharging);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-3xl"
      aria-pressed={isCharging}
      aria-label={isCharging ? "Stop Charging" : "Start Charging"}
    >
      <img
        className={`rounded-3xl transition-transform ${
          isCharging
            ? "transform animate-pulseColor border-4 border-green-200"
            : ""
        }`}
        src="/src/assets/engine-charging.png"
        alt={isCharging ? "Charging" : "Not Charging"}
      />
    </button>
  );
}

export default BatteryChargingButton;
