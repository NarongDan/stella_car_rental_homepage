import { lazy } from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";

// Lazy loading components
const HomePageBody = lazy(() => import("../pages/HomePageBody"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const CarPage = lazy(() => import("../pages/CarPage"));
const SearchCarPage = lazy(() => import("../pages/SearchCarPage"));
const BookingConfirmationPage = lazy(() =>
  import("../pages/ฺBookingConfirmationPage")
);
const CustomerDetail = lazy(() =>
  import("../features/customer/component/CustomerDetail")
);
const DetailCarPage = lazy(() => import("../pages/DetailCarPage"));
const CustomerPage = lazy(() => import("../pages/CustomerPage"));
const ProtectProfileRoute = lazy(() =>
  import("../features/customer/component/ProtectCustomerRoute")
);
const CustomerBookings = lazy(() =>
  import("../features/customer/component/CustomerBookings")
);
const PaymentSuccess = lazy(() => import("../pages/PaymentSuccess"));
const PaymentCancelled = lazy(() => import("../pages/PaymentCancelled"));

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
      { path: "/detail", element: <DetailCarPage /> },
      { path: "/paymentSuccessful", element: <PaymentSuccess /> },
      { path: "/paymentCancelled", element: <PaymentCancelled /> },
      {
        path: "/customer",
        element: (
          <ProtectProfileRoute>
            <CustomerPage />
          </ProtectProfileRoute>
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
