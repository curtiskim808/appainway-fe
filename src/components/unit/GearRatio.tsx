/**
 * GearRatio component displays the current gear ratio of the vehicle.
 * It uses Recoil for state management to get the gear ratio value from the global state.
 * The component maps the numeric gear ratio value to a corresponding gear letter using the `gearMap`.
 * It then displays the gear letter inside a GearIcon component and also shows the gear letter in a styled div.
 *
 * @return {JSX.Element} The rendered GearRatio component.
 * )
 */
import { metricValueSelector } from "../../recoil/selectors";
import { MetricType } from "../../types/dashboard";
import { useRecoilValue } from "recoil";
import GearIcon from "../icons/GearIcon";
import { gearMap } from "../../types";

function GearRatio() {
  const getMetricValue = useRecoilValue(metricValueSelector);
  const gearRatioValue = getMetricValue(MetricType.GEAR_RATIO);
  const gearLetter: string = gearMap[String(gearRatioValue)] || "N";
  return (
    <>
      <GearIcon letter={gearLetter} />
      <div className="text-dashboard-icon-grey text-sm font-bold text-center pt-5">
        {gearLetter}/{gearLetter}
      </div>
    </>
  );
}

export default GearRatio;
