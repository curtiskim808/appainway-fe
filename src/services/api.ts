const API_URL = import.meta.env.VITE_DASHBOARD_APP_API_URL;

export const fetchDashboardInfo = async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data;
};

export const fetchIndicatorsData = async (dashboardUuid: string) => {
  const response = await fetch(`${API_URL}/${dashboardUuid}/indicators`);
  const data = await response.json();
  return data;
};

export const fetchMetricsData = async (dashboardUuid: string) => {
  const response = await fetch(`${API_URL}/${dashboardUuid}/metrics`);
  const data = await response.json();
  return data;
};

export const fetchBatteryInfoData = async (dashboardUuid: string) => {
  const response = await fetch(`${API_URL}/${dashboardUuid}/battery-info`);
  const data = await response.json();
  return data;
};

export const putIndicator = async (
  dashboardUuid: string,
  id: number,
  type: string,
  status: boolean
) => {
  try {
    const response = await fetch(`${API_URL}/${dashboardUuid}/indicators`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type, status }),
    });

    if (!response.ok) throw new Error("Failed to update indicator");
  } catch (error) {
    console.error("Error updating indicator:", error);
    throw error;
  }
};

export const putMetric = async (
  dashboardUuid: string,
  id: number,
  type: string,
  value: number,
  unit: string
) => {
  try {
    const response = await fetch(`${API_URL}/${dashboardUuid}/metrics`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type, value, unit }),
    });

    if (!response.ok) throw new Error("Failed to update metric");
  } catch (error) {
    console.error("Error updating metric:", error);
    throw error;
  }
};
