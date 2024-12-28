import React, { Suspense, lazy } from "react";

const IndicatorsContainer = lazy(() => import("./IndicatorsContainer"));
const GaugesContainer = lazy(() => import("./GaugesContainer"));
const DataRow = lazy(() => import("./DataRow"));
const ButtonContainer = lazy(() => import("./ButtonContainer"));

function Dashboard() {
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
    </>
  );
}

export default Dashboard;
