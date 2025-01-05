import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { ThemeProvider } from "styled-components";
// import theme from "./theme/theme.js";
// import { RouterProvider } from "react-router/dom";
// import route from "./Routes/routes.jsx"; 
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <ThemeProvider theme={theme}> */}
      {/* <RouterProvider router={route}></RouterProvider> */}
       
    {/* </ThemeProvider> */}
  </StrictMode>
);
