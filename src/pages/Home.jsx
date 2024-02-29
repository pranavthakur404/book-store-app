import Banner from "../components/Banner";
import styles from "../component_css/Banner.module.css";
import Container from "../components/Container";
import BookList from "../components/BookList";

const Home = () => {
  return (
    <Container>
      <div className={styles.bannerContainer}>
        <Banner />
      </div>
      {/* search book list */}
      <div>
        <BookList />
      </div>
    </Container>
  );
};

export default Home;
