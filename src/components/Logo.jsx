import { Link } from "react-router-dom";
import styles from "../component_css/Logo.module.css";
import { FaBookOpen } from "react-icons/fa";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <FaBookOpen className={styles.bookIcon} /> Geek Books
    </Link>
  );
};

export default Logo;
