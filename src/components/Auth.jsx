import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useLocation } from "react-router-dom";

const Auth = ({ children }) => {
  const { login, setIsLogin } = useAuthContext();
  const pathname = useLocation();

  if (!login) {
    return <Navigate to="/login" state={pathname} />;
  }

  return children;
};

export default Auth;
