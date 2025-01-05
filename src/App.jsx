import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { RouterProvider } from "react-router/dom";
import route from "./Routes/routes";

function App() {
  return (
   
    <ThemeProvider theme={theme}>
    
      <RouterProvider router={route}></RouterProvider>
     </ThemeProvider>
  );
}

export default App;
