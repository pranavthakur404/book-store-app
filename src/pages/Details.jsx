import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import spinner from "../assets/Spinner-1s-200px.svg";
import styles from "../page_css/Details.module.css";
import Container from "../components/Container";
import { useCartContext } from "../context/CartContext";

const Details = () => {
  const { cartList, addCartItem } = useCartContext();

  const { id } = useParams();

  const { data, loading } = useFetch(
    `https://api.itbook.store/1.0/books/${id}`
  );

  const {
    image,
    authors,
    desc,
    language,
    pages,
    price,
    publisher,
    rating,
    subtitle,
    title,
    url,
    year,
    isbn13
  } = data;

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
        quantity: 1,
      };
      addCartItem(newObj);
    }
  };

  return (
    <Container>
      {loading ? (
        <div className={styles.loadingContainer}>
          <img src={spinner} alt="Loading.." />
        </div>
      ) : (
        <div className={styles.detailsWrapper}>
          <div className={styles.imgContainer}>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p>Year : {year}</p>
            <p>{price}</p>
            <div>
              <Link to={url} className={styles.buyBtn}>
                Buy
              </Link>
              <button onClick={handleClick} className={styles.cartBtn}>
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.info}>
            <p>
              <span>Author :</span> {authors}
            </p>
            <p>
              <span>Language :</span> {language}
            </p>
            <p>
              <span>Pages : </span>
              {pages}
            </p>
            <p>
              <span>Publisher : </span>
              {publisher}
            </p>
            <p>
              <span>Rating : </span> {rating} / 5
            </p>
            <p>
              <span>Subtitle : </span>
              {subtitle}
            </p>
            <p>{desc}</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Details;
