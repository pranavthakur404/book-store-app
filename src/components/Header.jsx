import Container from "./Container";
import Logo from "./Logo";
import styles from "../component_css/Header.module.css";
import SearchBooks from "./SearchBooks";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

const Header = () => {
  const { setIsLogin } = useAuthContext();
  const navigate = useNavigate();
  const { cartList } = useCartContext();

  const handleCartBtn = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Logo />
            <span className={styles.headerSearchbar}>
              <SearchBooks />
            </span>
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={handleCartBtn} className={styles.cartButton}>
              <FaShoppingCart className={styles.cartIcon} />
              {cartList.length > 0 && (
                <span className={styles.cartCounting}>{cartList.length}</span>
              )}
            </button>
            <button className="primary-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
