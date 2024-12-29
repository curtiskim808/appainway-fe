import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";

import {
  dashboardState,
  indicatorsState,
  metricsState,
  batteryInfoState,
} from "../recoil/atoms";

import {
  fetchDashboardInfo,
  fetchIndicatorsData,
  fetchMetricsData,
  fetchBatteryInfoData,
} from "../services/api";

export const useDashboard = (dashboardUuid: string) => {
  console.log("dashboardUuid", dashboardUuid);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const setDashboard = useSetRecoilState(dashboardState);
  const setIndicators = useSetRecoilState(indicatorsState);
  const setMetrics = useSetRecoilState(metricsState);
  const setBatteryInfo = useSetRecoilState(batteryInfoState);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [dashboard, indicators, metrics, batteryInfo] = await Promise.all(
          [
            fetchDashboardInfo(),
            fetchIndicatorsData(dashboardUuid),
            fetchMetricsData(dashboardUuid),
            fetchBatteryInfoData(dashboardUuid),
          ]
        );
        setDashboard(dashboard);
        setIndicators(indicators);
        setMetrics(metrics);
        setBatteryInfo(batteryInfo);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to fetch dashboard data"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [dashboardUuid]);

  return [loading, error];
};
