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
