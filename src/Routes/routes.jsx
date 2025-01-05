import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import ManageExpenses from "../pages/manageExpenses/ManageExpenses";
import Layout from "../pages/layout/Layout";
import CreateExpanses from "../pages/createExpanses/CreateExpanses";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/manage-expenses",
        element: <ManageExpenses />,
      },
      {
        path: "/create-expenses",
        element: <CreateExpanses />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


export default route;