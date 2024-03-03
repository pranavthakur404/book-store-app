import styles from "../component_css/Footer.module.css";
import Container from "./Container";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <p>Geek books © 2018-2024</p>
      </Container>
    </div>
  );
};

export default Footer;
