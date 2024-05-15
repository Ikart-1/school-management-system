import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";
import GuestLayout from "../layouts/GuestLayout";
import StudentDashboardLayout from "../layouts/Student/StudentDashboardLayout";
import StudentDashboard from "../components/Student/StudentDashboard";

export const STUDENT_DASHBOARD_ROUTE= '/student/dashboard'
export const LOGIN_ROUTE= '/login'
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    element: <GuestLayout />,
    children: [
      {
        path: LOGIN_ROUTE,
        element: <Login />,
      },
    ]
  },
  {
    element: <StudentDashboardLayout />,
    children: [
      {
        path: STUDENT_DASHBOARD_ROUTE,
        element: <StudentDashboard />,
      },
    ]
  },
]);
