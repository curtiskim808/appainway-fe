/**
 * BatteryChargingButton is a React functional component that renders a button
 * to toggle the battery charging state of a vehicle. It uses Recoil for state
 * management and custom hooks for handling indicator state and saving changes
 * to a database.
 *
 * The button displays an image that visually indicates whether the battery is
 * charging or not. When clicked, it toggles the charging state, updates the
 * state in Recoil, and saves the new state to the database.
 *
 * @returns {JSX.Element} The BatteryChargingButton component
 */
import { useState } from "react";
import { indicatorObjSelector } from "../../recoil/selectors";
import { useRecoilValue } from "recoil";
import { IndicatorType } from "../../types/dashboard";
import { useIndicators } from "../../hooks/useIndicators";

function BatteryChargingButton() {
  const getIndicatorObj = useRecoilValue(indicatorObjSelector);
  const batteryChargingIndicator = getIndicatorObj(
    IndicatorType.BATTERY_CHARGING
  );

  const [isCharging, setisCharging] = useState(batteryChargingIndicator.status);
  const { saveIndicatorToDb, setIndicatorsState } = useIndicators();

  const handleClick = () => {
    setisCharging(!isCharging);
    saveIndicatorToDb(
      batteryChargingIndicator.dashboardUuid,
      batteryChargingIndicator.id,
      IndicatorType.BATTERY_CHARGING,
      !isCharging
    );
    setIndicatorsState(
      batteryChargingIndicator.id,
      IndicatorType.BATTERY_CHARGING,
      !isCharging
    );
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
