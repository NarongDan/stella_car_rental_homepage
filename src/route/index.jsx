import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import { Navigate } from "react-router-dom";
import HomePageBody from "../pages/HomePageBody";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      { path: "*", element: <Navigate to="/" replace /> },
      { path: "", element: <HomePageBody /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
