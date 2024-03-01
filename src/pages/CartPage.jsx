import Container from "../components/Container";
import styles from "../page_css/CartPage.module.css";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cartList } = useCartContext();
  console.log(cartList);
  return (
    <Container>
      <div className={styles.cartPage}>
        {cartList.length == 0 ? (
          <div className={styles.cartBlackContainer}>
            <h2>NO ITEMS IN YOUR CART !!</h2>
          </div>
        ) : (
          <div className={styles.cartItemContainer}>
            {cartList.map((list) => {
              return <CartItem key={list.isbn13} {...list} />;
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
