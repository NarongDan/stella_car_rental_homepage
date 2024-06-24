import AuthContextProvider from "./context/AuthContext";
import Router from "./route";

import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </AuthContextProvider>
    </>
  );
}

export default App;
