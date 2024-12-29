import { useEffect } from "react";
import { fetchIndicatorsData, fetchMetricsData } from "../services/api";
import { useIndicators } from "./useIndicators";

function useFetchInitialData(dashboardUuid: string) {
  const { updateIndicator } = useIndicators();
  const { updateGauge } = useGauges();

  useEffect(() => {
    const getIndicatorsData = async () => {
      try {
        const data = await fetchIndicatorsData(dashboardUuid);
        Object.entries(data).forEach(([key, value]) => {
          updateIndicator(key, value);
        });
      } catch (error) {
        console.error("Failed to fetch indicators data", error);
      }
    }

    const getMetricsData = async () => {
      try {
        const data = await fetchMetricsData(dashboardUuid);
        Object.entries(data).forEach(([key, value]) => {
          updateGauge(key, value);
        });
      } catch (error) {
        console.error("Failed to fetch metrics data", error);
      }
    }
    
}
