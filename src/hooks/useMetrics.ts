/**
 * Custom hook to manage metrics state and save metrics to the database.
 * Provides functions to get metric value, save metric to DB, and update metrics state.
 */
import { useRecoilValue, useSetRecoilState } from "recoil";
import { metricValueSelector } from "../recoil/selectors";
import { MetricType } from "../types/dashboard";
import { putMetric } from "../services/api";
import { metricsState } from "../recoil/atoms";

function useMetrics() {
  const setMetrics = useSetRecoilState(metricsState);
  const getMetricValue = useRecoilValue(metricValueSelector);

  const saveMetricToDb = async (
    dashboardUuid: string,
    id: number,
    type: MetricType,
    value: number,
    unit: string
  ) => {
    try {
      if (dashboardUuid && id) {
        await putMetric(dashboardUuid, id, type, value, unit);
      }
    } catch (error) {
      console.error("Error saving metric:", error);
      throw error;
    }
  };
  const setMetricsState = (
    id: number,
    type: MetricType,
    value: number,
    unit: string
  ) => {
    setMetrics((prev) =>
      prev.map((metric) =>
        metric.type === type && metric.id === id
          ? { ...metric, value, unit, updatedAt: new Date().toISOString() }
          : metric
      )
    );
  };
  return { getMetricValue, saveMetricToDb, setMetricsState };
}

export default useMetrics;
