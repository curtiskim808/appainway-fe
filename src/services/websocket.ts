export const initializeWebSocket = (onMessage: (data: any) => void) => {
  const ws = new WebSocket("wss://your-websocket-url");

  ws.onopen = () => {
    console.log("WebSocket connection established");
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };

  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  ws.onclose = () => {
    console.log("WebSocket connection closed");
  };

  return ws;
};
