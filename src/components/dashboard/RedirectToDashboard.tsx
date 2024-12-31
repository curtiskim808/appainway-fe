/**
 * RedirectToDashboard component fetches the dashboard UUID and redirects the user
 * to the corresponding dashboard page.
 *
 * This component uses the `useEffect` hook to perform an asynchronous fetch operation
 * to retrieve the dashboard information. Upon successfully fetching the data, it navigates
 * the user to the dashboard page using the UUID obtained from the fetched data.
 *
 * If the fetch operation fails, an error is logged to the console.
 *
 * @returns {JSX.Element} The RedirectToDashboard component
 */
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
