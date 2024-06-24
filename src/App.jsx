import Router from "./route";

import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Router />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
