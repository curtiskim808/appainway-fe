import { useEffect } from "react";
import { useIndicators } from "./useIndicators";
import { useGauges } from "./useGauges";
import { initializeWebSocket } from "../services/websocket";

const useWebSocket = () => {
  const { updateIndicator } = useIndicators();
  const { updateGauge } = useGauges();

  useEffect(() => {
    const handleMessage = (data: any) => {
      switch (data.type) {
        case "indicator-update":
          updateIndicator(data.key, data.value);
          break;
        case "gauge-update":
          updateGauge(data.key, data.value);
          break;
        // Handle other message types as needed
        default:
          console.warn(`Unhandled message type: ${data.type}`);
      }
    };

    const ws = initializeWebSocket(handleMessage);

    return () => {
      ws.close();
    };
  }, [updateIndicator, updateGauge]);
};

export default useWebSocket;
