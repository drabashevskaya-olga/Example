import React, { useState, useContext, useEffect } from "react";
import { Checkbox } from "../../../../parts/form";
import { Div } from "../../../../parts/general";
import { H3, Span } from "../../../../parts/txt";
import { Custom } from "../../../../parts/button";
import styles from "./style.module.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import { UserCtx } from "../../../../Ctx/User";

export default function ChsSubjects({ subjects, setList, list }) {
  const [displayAll, setDisplayAll] = useState(false);

  useEffect(() => setList(subjects), []);

  const handleCheck = (e) => {
    const { name, checked } = e.target;

    if (name === "all") {
      if (checked) {
        setList(subjects);
      } else setList([]);

      return;
    }

    if (checked) {
      setList((prev) => [...prev, name]);
    } else {
      setList((prev) => prev.filter((s) => s !== name));
    }
  };

  const { config } = useContext(UserCtx);

  const getSmallHeight = () => (config.device === "desktop" ? "250px" : "50px");

  const [maxHeight, setMaxHeight] = useState(getSmallHeight());

  const toggleHeight = () =>
    setMaxHeight((prv) =>
      prv === getSmallHeight() ? "100%" : getSmallHeight()
    );

  return (
    <Div
      className={`${styles.Container} border rounded`}
      style={{ "--max-height": maxHeight }}
    >
      <Div className={styles.Headline}>
        <H3>Subjects</H3>
        <Custom
          className={`fw-bold text-primary fs-sm`}
          onClick={() => {
            toggleHeight();
            setDisplayAll(!displayAll);
          }}
        >
          {displayAll ? "Show less" : "Show all"}
        </Custom>
      </Div>
      <Div className={styles.Body}>
        <Checkbox
          name="all"
          onChange={handleCheck}
          checked={list.length === subjects.length}
        >
          <Span>All Subjects</Span>
        </Checkbox>
        {subjects.map((subject, index) => (
          <Checkbox
            key={index}
            name={subject}
            onChange={handleCheck}
            checked={list.includes(subject)}
          >
            <Span>{subject}</Span>
          </Checkbox>
        ))}
      </Div>
    </Div>
  );
}
