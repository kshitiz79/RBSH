


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// Ensure that `router` is exported correctly from `Router.jsx`
import router from "./routes/Router.jsx"; // Make sure this export matches

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
