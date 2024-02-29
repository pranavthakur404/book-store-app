import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import spinner from "../assets/Spinner-1s-200px.svg";
import styles from "../page_css/Details.module.css";
import Container from "../components/Container";
import { FaStar } from "react-icons/fa";

const Details = () => {
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
  } = data;

  console.log(data);

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
            <button className={styles.cartBtn}>Add to Cart</button>
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
