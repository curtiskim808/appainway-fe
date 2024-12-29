import { useRecoilValue, useSetRecoilState } from "recoil";
import { metricValueSelector } from "../recoil/selectors";
import { MetricType } from "../types/dashboard";
import { putMetric } from "../services/api";
import { metricsState } from "../recoil/atoms";

function useMetrics() {
  const setMetrics = useSetRecoilState(metricsState);
  const getMetricValue = useRecoilValue(metricValueSelector);

  const updateMetric = async (
    dashboardUuid: string,
    id: number,
    type: MetricType,
    value: number,
    unit: string
  ) => {
    try {
      putMetric(dashboardUuid, id, type, value, unit);

      setMetrics((prev) =>
        prev.map((metric) =>
          metric.type === type && metric.id === id
            ? { ...metric, value, unit, updatedAt: new Date().toISOString() }
            : metric
        )
      );
    } catch (error) {
      console.error("Error updating indicator:", error);
      throw error;
    }
  };
  return { getMetricValue, updateMetric };
}

export default useMetrics;
