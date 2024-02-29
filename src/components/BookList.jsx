import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import styles from "../component_css/BookList.module.css";
import useFetch from "../hooks/useFetch";
import { useParams, useSearchParams } from "react-router-dom";
import spinner from "../assets/Spinner-1s-200px.svg";
import Books from "./Books";
import { TbError404 } from "react-icons/tb";

const BookList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "python";

  const { data, loading } = useFetch(
    `https://api.itbook.store/1.0/search/${searchTerm}/${pageNumber}`
  );

  console.log(data);

  const handlePrevBtn = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const handleNextBtn = () => {
    const total = Math.ceil(data.total / 10);
    if (pageNumber < total) {
      console.log(pageNumber);
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className={styles.booklistWrapper}>
      <SectionTitle title="Search Book List :-" />
      <div>
        {loading ? (
          <div className={styles.loading}>
            <img src={spinner} alt="loading" />
          </div>
        ) : (
          <>
            <div>
              {data.books.length == 0 ? (
                <div className={styles.notFoundText}>
                  <TbError404 />
                </div>
              ) : (
                <div className={styles.bookList}>
                  {data.books &&
                    data?.books.map((list) => {
                      return <Books key={list.isbn13} {...list} />;
                    })}
                </div>
              )}
            </div>
            <div className={styles.buttons}>
              <button onClick={handlePrevBtn}>Prev</button>
              <span>
                {pageNumber} / {Math.ceil(data.total / 10)}
              </span>
              <button onClick={handleNextBtn}>Next</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookList;
