/**
 * Custom hook to manage WebSocket connections for a vehicle dashboard.
 * Subscribes to various topics and handles incoming data.
 */
import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { BatteryInfo, Indicator, Metric } from "../types/dashboard";

const WEB_SOCKET_URL = import.meta.env.VITE_DASHBOARD_APP_WEBSOCKET_URL;
const useWebSocket = (
  dashboardUuid: string,
  onBatteryTemperature: (data: BatteryInfo) => void,
  onBatteryCapacity: (data: BatteryInfo) => void,
  onMetrics: (data: Metric) => void,
  onIndicators: (data: Indicator) => void
) => {
  const stompClient = useRef<Client | null>(null);
  const [connectionStatus, setConnectionStatus] = useState("DISCONNECTED");

  useEffect(() => {
    stompClient.current = new Client({
      webSocketFactory: () => new SockJS(WEB_SOCKET_URL),
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      onConnect: () => {
        setConnectionStatus("CONNECTED");

        // Subscribe to topics...
        if (stompClient.current) {
          stompClient.current.subscribe(
            `/topic/battery_temperature/${dashboardUuid}`,
            (message) => {
              const body = JSON.parse(message.body);
              onBatteryTemperature(body);
            }
          );

          // Subscribe to battery_capacity
          stompClient.current.subscribe(
            `/topic/battery_capacity/${dashboardUuid}`,
            (message) => {
              const body = JSON.parse(message.body);
              onBatteryCapacity(body);
            }
          );

          // Subscribe to metrics
          stompClient.current.subscribe(
            `/topic/metrics/${dashboardUuid}`,
            (message) => {
              const body = JSON.parse(message.body);
              onMetrics(body);
            }
          );

          // Subscribe to indicators
          stompClient.current.subscribe(
            `/topic/indicators/${dashboardUuid}`,
            (message) => {
              const body = JSON.parse(message.body);
              onIndicators(body);
            }
          );
        }
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
        setConnectionStatus("ERROR");
      },
      onDisconnect: () => {
        setConnectionStatus("DISCONNECTED");
        console.info("WebSocket disconnected");
      },
      onWebSocketClose: () => {
        setConnectionStatus("DISCONNECTED");
        console.info("WebSocket closed");
      },
    });

    stompClient.current.activate();

    return () => {
      if (stompClient.current) {
        stompClient.current.deactivate();
      }
    };
  }, [
    dashboardUuid,
    onBatteryTemperature,
    onBatteryCapacity,
    onMetrics,
    onIndicators,
  ]);

  return connectionStatus;
};

export default useWebSocket;
