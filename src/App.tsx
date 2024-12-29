import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import RedirectToDashboard from "./components/dashboard/RedirectToDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<RedirectToDashboard />} />

        {/* Dynamic Dashboard Route */}
        <Route path="dashboards/:dashboardUuid" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
