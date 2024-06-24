import AuthContextProvider from "./context/AuthContext";
import CarContextProvider from "./context/CarContext";
import Router from "./route";

import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <CarContextProvider>
        <AuthContextProvider>
          <Router />
          <ToastContainer position="bottom-right" autoClose={3000} />
        </AuthContextProvider>
      </CarContextProvider>
    </>
  );
}

export default App;
