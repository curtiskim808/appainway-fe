import { useRecoilValue, useSetRecoilState } from "recoil";
import { indicatorsState } from "../recoil/atoms";
import { indicatorStatusSelector } from "../recoil/selectors";
import { IndicatorType } from "../types/dashboard";
import { putIndicator } from "../services/api";

export const useIndicators = () => {
  const setIndicators = useSetRecoilState(indicatorsState);
  const getIndicatorStatus = useRecoilValue(indicatorStatusSelector);

  const updateIndicator = async (
    dashboardUuid: string,
    id: number,
    type: IndicatorType,
    status: boolean
  ) => {
    try {
      putIndicator(dashboardUuid, id, type, status);
      console.log("Updating indicator:", dashboardUuid, id, type, status);
      // setIndicators((prev) =>
      //   prev.map((indicator) =>
      //     indicator.type === type
      //       ? { ...indicator, status, updatedAt: new Date().toISOString() }
      //       : indicator
      //   )
      // );
      setIndicators((prev) => {
        const newIndicators = [...prev];
        console.log("New indicators:", newIndicators);
        const indicatorIndex = newIndicators.findIndex(
          (indicator) => indicator.type === type
        );
        console.log("Indicator index:", indicatorIndex);
        if (indicatorIndex !== -1) {
          newIndicators[indicatorIndex] = {
            ...newIndicators[indicatorIndex],
            status,
            updatedAt: new Date().toISOString(),
          };
        }
        return newIndicators;
      });
    } catch (error) {
      console.error("Error updating indicator:", error);
      throw error;
    }
  };
  return { getIndicatorStatus, updateIndicator };
};
