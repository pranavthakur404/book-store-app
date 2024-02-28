import React from "react";
import { Form } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import styles from "../component_css/SearchBooks.module.css";

const handleSubmit = (e) => {
  e.preventDeault();
};

const SearchBooks = () => {
  return (
    <Form className={styles.form}>
      <input
        type="text"
        name="name"
        className={StyleSheet.input}
        placeholder="Search book by author or publisher"
      />
      <IoSearch className={styles.searchIcon} />
    </Form>
  );
};

export default SearchBooks;
