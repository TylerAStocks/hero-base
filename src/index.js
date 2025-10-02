import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // For web applications
import Headquarters from './DataTables/Equipment/Headquarters/Headquarters.tsx';
import GroundVehicles from './DataTables/Equipment/Vehicles/GroundVehicles/GroundVehicles.tsx';

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />, // Your main App component will be rendered here
        children: [
          // Define your nested routes here if needed
        ],
      },
      {
        path: "/headquarters",
        element: <Headquarters/>, 
        children: [
          // Define your nested routes here if needed
        ],
      },
      {
        path: "/groundVehicles",
        element: <GroundVehicles/>, 
        children: [
          // Define your nested routes here if needed
        ],
      },
    ]);

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
