/**
 * Dashboard component that displays various real-time data and controls for a vehicle dashboard.
 *
 * This component uses lazy loading and suspense to load different parts of the dashboard asynchronously.
 * It establishes a WebSocket connection to receive real-time updates for battery information, metrics, and indicators.
 *
 * @returns {JSX.Element} The rendered dashboard component.
 *
 * @remarks
 * - The component uses `useParams` to get the `dashboardUuid` from the URL.
 * - It uses custom hooks `useDashboard`, `useBatteryInfo`, `useMetrics`, and `useIndicators` to manage state and data fetching.
 * - The `useWebSocket` hook is used to establish a WebSocket connection and handle incoming data.
 * - The component displays loading indicators while the different parts of the dashboard are being loaded.
 */
import { Suspense, lazy, useCallback } from "react";
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
    setBatteryInfoState(data.id, data.type, data.value, data.unit);
  }, []);

  const handleBatteryCapacity = useCallback((data: BatteryInfo) => {
    setBatteryInfoState(data.id, data.type, data.value, data.unit);
  }, []);

  const handleMetrics = useCallback((data: Metric) => {
    setMetricsState(data.id, data.type, data.value, data.unit);
  }, []);

  const handleIndicators = useCallback((data: Indicator) => {
    setIndicatorsState(data.id, data.type, data.status);
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
