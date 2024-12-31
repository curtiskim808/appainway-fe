/**
 * GaugesContainer component renders a container with two gauges.
 *
 * This component is responsible for displaying two different types of gauges
 * within a styled container. The gauges displayed are:
 * - Power Input Gauge
 * - Motor RPM Gauge
 *
 * The container has a grey background and borders with specific styles.
 * Each gauge is placed inside a grid layout to ensure proper alignment and spacing.
 *
 * @returns {JSX.Element} The GaugesContainer component.
 */
import Gauge from "../common/Gauge";
import { MetricType } from "../../types/dashboard";

function GaugesContainer() {
  return (
    <div className="bg-dashboard-grey gap-0.4 border-gray-600 border-t-3 border-l-3 border-r-3">
      <div className="grid grid-cols-2 place-items-center">
        <div className="grid grid-cols-1 place-content-center p-4">
          <Gauge type={MetricType.POWER_INPUT} />
        </div>
        <div className="grid grid-cols-1 place-content-center p-4">
          <Gauge type={MetricType.MOTOR_RPM} />
        </div>
      </div>
    </div>
  );
}

export default GaugesContainer;
