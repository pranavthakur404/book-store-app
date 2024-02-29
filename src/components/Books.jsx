import styles from "../component_css/Book.module.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Books = ({ image, isbn13, price, subtitle, title, url }) => {
  const { cartList, addCartItem } = useCartContext();
  const handleClick = () => {
    let check = true;
    cartList.forEach((list) => {
      if (list.isbn13 == isbn13) {
        alert("Item already Added");
        check = false;
      }
    });
    if (check) {
      const newObj = {
        isbn13: isbn13,
        image: image,
        price: price,
        title: title,
        quantity: 0,
      };
      addCartItem(newObj);
    }
  };
  return (
    <div to={`/details/${isbn13}`} className={styles.book}>
      <img src={image} alt="title" />
      <div className={styles.bookInfo}>
        <Link to={`/details/${isbn13}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <p className={styles.price}>{price}</p>
        <button className={styles.cartBtn} onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Books;
