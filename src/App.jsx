import AuthContextProvider from "./context/AuthContext";
import BookingContextProvider from "./context/BookingContext";
import CarContextProvider from "./context/CarContext";
import { ThemeProvider } from "./context/ThemeContext";
import Router from "./route";

import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ThemeProvider>
        <CarContextProvider>
          <AuthContextProvider>
            <BookingContextProvider>
              <Router />
              <ToastContainer position="bottom-right" autoClose={3000} />
            </BookingContextProvider>
          </AuthContextProvider>
        </CarContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
