import { Suspense } from "react";
import AuthContextProvider from "./context/AuthContext";
import BookingContextProvider from "./context/BookingContext";
import CarContextProvider from "./context/CarContext";
import { ThemeProvider } from "./context/ThemeContext";
import Router from "./route";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  return (
    <ThemeProvider>
      <CarContextProvider>
        <AuthContextProvider>
          <BookingContextProvider>
            <Suspense fallback={<LoadingSpinner />}>
              <Router />
              <ToastContainer position="bottom-right" autoClose={3000} />
            </Suspense>
          </BookingContextProvider>
        </AuthContextProvider>
      </CarContextProvider>
    </ThemeProvider>
  );
}

export default App;
