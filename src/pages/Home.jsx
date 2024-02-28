import Banner from "../components/Banner";
import styles from "../component_css/Banner.module.css";
import Container from "../components/Container";

const Home = () => {
  return (
    <Container>
      <div className={styles.bannerContainer}>
        <Banner />
      </div>
    </Container>
  );
};

export default Home;
