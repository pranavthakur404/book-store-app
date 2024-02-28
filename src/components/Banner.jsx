import styles from "../component_css/Banner.module.css";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SliderShimmer from "./SliderShimmer";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import spinner from "../assets/Spinner-1s-200px.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  const { data, loading } = useFetch("https://api.itbook.store/1.0/new");

  return (
    <div className={styles.banner}>
      <SectionTitle title="New Collection :-" />
      {loading ? (
        <div className={styles.loadingIcon}>
          <img src={spinner} alt="Loading..." />
        </div>
      ) : (
        <Swiper
          autoplay={true}
          slidesPerView={1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data?.books.map((list) => {
            return (
              <SwiperSlide key={list.isbn13}>
                <Link className={styles.box}>
                  <img src={list.image} alt="Book" />
                  <div className={styles.info}></div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default Banner;
