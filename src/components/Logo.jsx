import styles from "../component_css/Logo.module.css";
import { FaBookOpen } from "react-icons/fa";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <FaBookOpen className={styles.bookIcon} /> Geek Books
    </div>
  );
};

export default Logo;
