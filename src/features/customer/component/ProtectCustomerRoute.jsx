import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import LoadingSpinner from "../../../components/LoadingSpinner";

export default function ProtectProfileRoute({ children }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (!authUser && !isAuthUserLoading) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isAuthUserLoading && <LoadingSpinner />}
      {children}
    </>
  );
}
