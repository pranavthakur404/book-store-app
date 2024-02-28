import styles from "../component_css/SliderShimmer.module.css";
const SliderShimmer = () => {
  return (
    <div className={styles.shimmerContainer}>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
    </div>
  );
};

export default SliderShimmer;
