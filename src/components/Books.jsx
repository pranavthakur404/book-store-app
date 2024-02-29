import styles from "../component_css/Book.module.css";
import { Link } from "react-router-dom";

const Books = ({ image, isbn13, price, subtitle, title, url }) => {
  return (
    <Link to={`/details/${isbn13}`} className={styles.book}>
      <img src={image} alt="title" />
      <div className={styles.bookInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </Link>
  );
};

export default Books;
