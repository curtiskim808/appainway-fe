import React, { Suspense, lazy, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useDashboard } from "../../hooks/useDashboard";
import useWebSocket from "../../hooks/useWebSocket";
import useBatteryInfo from "../../hooks/useBatteryInfo";
import { BatteryInfo, Indicator, Metric } from "../../types/dashboard";
import useMetrics from "../../hooks/useMetrics";
import { useIndicators } from "../../hooks/useIndicators";

const IndicatorsContainer = lazy(() => import("./IndicatorsContainer"));
const GaugesContainer = lazy(() => import("./GaugesContainer"));
const DataRow = lazy(() => import("./DataRow"));
const ButtonContainer = lazy(() => import("./ButtonContainer"));

function Dashboard() {
  const dashboardUuid = useParams().dashboardUuid as string;
  const [loading] = useDashboard(dashboardUuid);

  // Real-Time Websocket connection
  const { setBatteryInfoState } = useBatteryInfo();
  const { setMetricsState } = useMetrics();
  const { setIndicatorsState } = useIndicators();

  const handleBatteryTemperature = useCallback((data: BatteryInfo) => {
    console.log("handleBatteryTemperature data: ", data);
    setBatteryInfoState(
      data.dashboardUuid,
      data.id,
      data.type,
      data.value,
      data.unit
    );
  }, []);

  const handleBatteryCapacity = useCallback((data: BatteryInfo) => {
    console.log("handleBatteryCapacity data: ", data);
    setBatteryInfoState(
      data.dashboardUuid,
      data.id,
      data.type,
      data.value,
      data.unit
    );
  }, []);

  const handleMetrics = useCallback((data: Metric) => {
    console.log("handleMetrics data: ", data);
    setMetricsState(
      data.dashboardUuid,
      data.id,
      data.type,
      data.value,
      data.unit
    );
  }, []);

  const handleIndicators = useCallback((data: Indicator) => {
    console.log("handleIndicators data: ", data);
    setIndicatorsState(data.dashboardUuid, data.id, data.type, data.status);
  }, []);

  useWebSocket(
    dashboardUuid,
    handleBatteryTemperature,
    handleBatteryCapacity,
    handleMetrics,
    handleIndicators
  );

  return (
    <>
      <div className="bg-dashboard-black p-6 min-h-screen">
        <Suspense fallback={<div>Loading Indicators...</div>}>
          <IndicatorsContainer />
        </Suspense>

        <Suspense fallback={<div>Loading Gauges...</div>}>
          <GaugesContainer />
        </Suspense>

        <Suspense fallback={<div>Loading Slider...</div>}>
          <DataRow />
        </Suspense>

        <Suspense fallback={<div>Loading Bottom Row...</div>}>
          <ButtonContainer />
        </Suspense>
      </div>
      {loading && <div>Loading...</div>}
    </>
  );
}

export default Dashboard;
