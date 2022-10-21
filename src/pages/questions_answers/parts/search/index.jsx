import React, { useState, useEffect } from "react";
import { Div } from "../../../../parts/general";
import { Input } from "../../../../parts/form";
import styles from "./style.module.scss";
import { RiSearch2Line } from "react-icons/ri";

export default function AQSearch({ filter, setFilter, filterType, setFilterType }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (filterType == 'subject') {
      setValue(`#${filter}`);
    } else {
      setValue(filter);
    }
  }, [filter]);

  const handleChange = (e) => {
    const { value } = e.target;

    if (filter.length > value.length || value.length > 3) {
      setFilter(value);
      setFilterType('value');
      setValue(value);
    }
  };

  return (
    <div className={`py-3 ${styles.Container}`}>
        <Div className={styles.Input}>
          <Div className={styles.Icon}>
            <RiSearch2Line />
          </Div>
          <Input
            type="search"
            no-decoration
            placeholder="Search for questions..."
            onChange={handleChange}
            value={value}
          />
        </Div>
    </div>
  );
}
