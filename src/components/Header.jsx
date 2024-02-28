import Container from "./Container";
import Logo from "./Logo";
import styles from "../component_css/Header.module.css";
import SearchBooks from "./SearchBooks";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Logo />
            <SearchBooks />
          </div>

          <div className={styles.buttonContainer}>
            <p>
              <Link>FAQ</Link>
            </p>
            <button className={styles.cartButton}>
              <FaShoppingCart className={styles.cartIcon} />
              <span className={styles.cartCounting}>10</span>
            </button>
            <button className="primary-btn">Sign in</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;