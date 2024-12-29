export const fetchDashboardInfo = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/dashboards`);
  const data = await response.json();
  return data;
};

export const fetchIndicatorsData = async (dashboardUuid: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/dashboards/${dashboardUuid}/indicators`
  );
  const data = await response.json();
  return data;
};

export const fetchMetricsData = async (dashboardUuid: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/dashboards/${dashboardUuid}/metrics`
  );
  const data = await response.json();
  return data;
};
