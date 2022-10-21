import React, { useState, useEffect } from "react";
import { Input } from "../../../../parts/form";
import { Div } from "../../../../parts/general";
import styles from "./style.module.scss";
import { RiSearch2Line } from "react-icons/ri";

export default function ChsSearchbox({ filter, setFilter }) {
  const handleChange = (e) => {
    const { value } = e.target;

    if (filter.length > value.length || value.length > 3) {
      setFilter(value);
    }
  };

  return (
    <Div className={`rounded ${styles.Container}`}>
      <RiSearch2Line />
      <Input
        placeholder="Search for modules and textbooks"
        no-decoration
        block
        onChange={handleChange}
      />
    </Div>
  );
}
