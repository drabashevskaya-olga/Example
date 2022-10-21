import React, { useState } from "react";
import styles from "./style.module.scss";
import { BtnLink } from "../../../../parts/button";
import * as Txt from "../../../../parts/txt";
import {
  CollegeAlgebra,
  Statistics,
  Physics,
  OrganicChemistry,
} from "../../../../assets/svgs";
import { useQuery } from "react-query";
import { APIGetPopularTextbooks } from "../../../../API/all/general";
import { write } from "../../../../API/useful_functions";

const TextbooksList = [
  {
    title: "Math",
    color: "#049af1",
    icon: <CollegeAlgebra />,
  },
  {
    title: "Statistics",
    color: "#8acc8c",
    icon: <Statistics />,
  },
  {
    title: "Physics",
    color: "#8983e2",
    icon: <Physics />,
  },
  {
    title: "Chemistry",
    color: "#dea47d",
    icon: <OrganicChemistry />,
  },
];

export default function TextBookLink() {
  const [expanded, setExpanded] = useState("Math");

  const textbooks12 = useQuery("textbooks", APIGetPopularTextbooks);

  const getTextbooks = (expanded) => {
    if (!Array.isArray(textbooks12.data)) return [];

    const books = textbooks12.data.find(
      (textbook) => textbook.name === expanded
    );

    return books?.textBookCoursesList || [];
  };

  return (
    <div className={styles.Container}>
      <BtnLink to="/onboard#textbook">Textbooks</BtnLink>

      <div className={styles.dropdown}>
        <div className={styles.wrraper}>
          <nav>
            <ul>
              {TextbooksList.map((textbook, index) => (
                <li
                  key={index}
                  aria-expanded={expanded === textbook.title}
                  onClick={() => setExpanded(textbook.title)}
                  style={{ "--color": textbook.color }}
                >
                  {textbook.icon}
                  {textbook.title}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <div className={styles.headline}>
              <span>{expanded}</span>
            </div>
            <div className={styles.books}>
              {getTextbooks(expanded).map((book, index) => (
                <div key={index} className={styles.book}>
                  <Txt.A to={write(book.courseUrl)}>
                    <img
                      className={styles.book__img}
                      loading="lazy"
                      src={write(book.imageLink, {
                        shift: "https://www.proprep.com",
                      })}
                      alt={book.author}
                    />
                    <div className={styles.book__details}>
                      <Txt.Span className={styles.book__title}>
                        {write(book.name, { max: 20, ellipsis: true })}
                      </Txt.Span>
                      <Txt.Span className={styles.book__author}>
                        {write(book.author, {
                          default: "David hofman",
                          max: 30,
                          ellipsis: true,
                        })}
                      </Txt.Span>
                    </div>
                  </Txt.A>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
