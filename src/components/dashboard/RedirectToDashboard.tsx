import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDashboardInfo } from "../../services/api";

function RedirectToDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardUuid = async () => {
      try {
        const data = await fetchDashboardInfo();
        const dashboardUuid = data.uuid;

        navigate(`dashboards/${dashboardUuid}`);
      } catch (error) {
        console.error("Failed to fetch dashboard UUID:", error);
      }
    };

    fetchDashboardUuid();
  }, [navigate]);

  return <div>Loading dashboard...</div>;
}

export default RedirectToDashboard;
