import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import { Navigate } from "react-router-dom";
import HomePageBody from "../pages/HomePageBody";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

import CarPage from "../pages/CarPage";

import SearchCarPage from "../pages/SearchCarPage";
import BookingConfirmationPage from "../pages/ฺBookingConfirmationPage";
import CustomerPage from "../pages/CustomerPage";
import CustomerDetail from "../features/customer/component/CustomerDetail";
import CustomerBookings from "../features/customer/component/CustomerBookings";
import ProtectCustomerRoute from "../features/customer/component/ProtectCustomerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      { path: "*", element: <Navigate to="/" replace /> },
      { path: "", element: <HomePageBody /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegistrationPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/cars", element: <CarPage /> },
      { path: "/search-car", element: <SearchCarPage /> },
      { path: "/booking", element: <BookingConfirmationPage /> },
      {
        path: "/customer",
        element: (
          <ProtectCustomerRoute>
            <CustomerPage />
          </ProtectCustomerRoute>
        ),
        children: [
          { path: "", element: <CustomerDetail /> },
          { path: "bookings", element: <CustomerBookings /> },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
