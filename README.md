## Vehicle Dashboard Application Frontend

### Overview

This is a React.js application with TailwindCSS for styling. The application uses Recoil for state management and establishes a WebSocket connection for real-time updates.

Prerequisites:

- Node 21
- Tailwindcss 3
- Recoil
- React Router Dom 6

### Technical Design Document:

https://docs.google.com/document/d/1t4sMQC7izzmQ98fK74Y-Zo6FlTWfywD9GSzChE-UD9s/edit?usp=sharing

### API Documentation

For detailed API documentation, refer to the API Documentation.
https://secret-garden-38447-cfa420a113c0.herokuapp.com/api/v1/api-docs

## Features

- **WebSocket Connection**: The application establishes a WebSocket connection to receive real-time updates for battery information, metrics, and indicators.
- **API Calls**: The application sends API calls under specific conditions.

## User Interactions

- **Motor Speed Setting**: Users can adjust the motor speed settings.
- **Electric Charging Button**: Users can press the electric charging button to initiate charging.

### Local Dev Setup Instructions:

1. Install dependencies:

```bash
  npm install
# or
  yarn install
```

2. Set Your Environment Variables

Create a `.env` file in the root directory and add the following environment variables: (refer to .env.example)
(In your local, http://localhost:8080 would be your backend url)
```bash
  VITE_DASHBOARD_APP_API_URL=<backend-api-url>/api/v1/dashboards
  VITE_DASHBOARD_APP_WEBSOCKET_URL=<backend-api-url>/api/v1/ws
```

3. build and run for dev

```bash
  npm run dev
```

Visit your dev

![alt text](image.png)

4. (Optional) run the application using Docker

You can also reference the Dockerfile to run the application. Build and run the Docker container with the following commands:

```bash
  docker build -t vehicle-dashboard .
  docker run -p 5173:5173 vehicle-dashboard
```
