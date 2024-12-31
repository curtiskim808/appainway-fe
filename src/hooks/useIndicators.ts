/**
 * Custom hook for managing indicator states in a dashboard.
 * Provides functions to get, update, and save indicator states.
 */
import { useRecoilValue, useSetRecoilState } from "recoil";
import { indicatorsState } from "../recoil/atoms";
import { indicatorStatusSelector } from "../recoil/selectors";
import { IndicatorType } from "../types/dashboard";
import { putIndicator } from "../services/api";

export const useIndicators = () => {
  const setIndicators = useSetRecoilState(indicatorsState);
  const getIndicatorStatus = useRecoilValue(indicatorStatusSelector);

  const saveIndicatorToDb = async (
    dashboardUuid: string,
    id: number,
    type: IndicatorType,
    status: boolean
  ) => {
    try {
      if (dashboardUuid && id) {
        await putIndicator(dashboardUuid, id, type, status);
      }
    } catch (error) {
      console.error("Error updating indicator:", error);
      throw error;
    }
  };
  const setIndicatorsState = (
    id: number,
    type: IndicatorType,
    status: boolean
  ) => {
    setIndicators((prev) => {
      const newIndicators = [...prev];
      const indicatorIndex = newIndicators.findIndex(
        (indicator) => indicator.type === type && indicator.id === id
      );

      if (indicatorIndex !== -1) {
        const currentIndicator = newIndicators[indicatorIndex];
        if (currentIndicator.status !== status) {
          newIndicators[indicatorIndex] = {
            ...currentIndicator,
            status,
            updatedAt: new Date().toISOString(),
          };
          return newIndicators;
        }
      }
      return prev;
    });
  };
  return { getIndicatorStatus, saveIndicatorToDb, setIndicatorsState };
};
