import styles from "../component_css/CartItem.module.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";

const CartItem = ({ image, isbn13, price, quantity, title }) => {
  const { deleteItem, increaseQuantity, decreaseQuantity } = useCartContext();

  console.log(Number(price.slice(1)), quantity);

  const handleDelete = () => {
    deleteItem(isbn13);
  };

  return (
    <div className={styles.CartItem}>
      <img src={image} alt={title} />
      <p className={styles.title}>
        <Link to={`/details/${isbn13}`}>{title}</Link>
      </p>
      <h4 className={styles.price}>${Number(price.slice(1)) * quantity}</h4>
      <div className={styles.quantContainer}>
        <button
          onClick={() => {
            decreaseQuantity(isbn13);
          }}
        >
          <FaMinus />
        </button>
        <h4>{quantity}</h4>
        <button
          onClick={() => {
            increaseQuantity(isbn13);
          }}
        >
          <FaPlus />
        </button>
      </div>
      <button onClick={handleDelete} className={styles.deleteBtn}>
        <RiDeleteBack2Fill />
      </button>
    </div>
  );
};

export default CartItem;
