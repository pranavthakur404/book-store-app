import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useAuthContext } from "../context/AuthProvider";
import { useEffect } from "react";
import styles from '../page_css/Login.module.css'

const Login = () => {
  const { login, setIsLogin } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();
  const prevPath = state.pathname;

  useEffect(() => {
    if (login) {
      navigate(prevPath, { replace: true });
    }
  }, [login]);

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className={styles.loginContainer}>
      <Container>
        <button onClick={handleLogin}>Login</button>
      </Container>
    </div>
  );
};

export default Login;
