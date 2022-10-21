import React, { useState, useEffect } from "react";
import { UserCtx } from "../../Ctx/User";
import { useNavigate, useLocation } from "react-router-dom";
import Head from "../../components/Head";
import * as Txt from "../../parts/txt";
import { Div } from "../../parts/general";
import { Dropdown } from "../../parts/form";
import styles from "./style.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { BsBookmarksFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import If from "../../components/renderIf";
import { useMutation, useQuery } from "react-query";
import {
  APIfindAcademyByName,
  APIfindTextbookByName,
  APIGet2PopularAcademies,
  APIGet2PopularTextbooks,
} from "../../API/all/general";
import writeDataLayer from "../../components/dataLayer";

export default function Onboard() {
  const { user } = React.useContext(UserCtx);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSearch, setActiveSearch] = useState("school");

  const [schools, setSchools] = useState([]);
  const [textbooks, setTextbooks] = useState([]);

  const [schoolFilter, setSchoolFilter] = useState("");
  const [textbookFilter, setTextbookFilter] = useState("");

  const schoolsQuery = useMutation(
    () => APIfindAcademyByName({ name: schoolFilter }),
    {
      onSuccess: (data) => {
        setSchools(data);
      },
    }
  );
  const textbooksQuery = useMutation(
    () => APIfindTextbookByName({ name: textbookFilter }),
    {
      onSuccess: (data) => {
        setTextbooks(data);
      },
    }
  );

  const popularAcademies = useQuery("popularSchools", APIGet2PopularAcademies);
  const popularTextbooks = useQuery(
    "popularTextbooks",
    APIGet2PopularTextbooks
  );

  useEffect(() => {
    if (schoolFilter) {
      schoolsQuery.mutate();
    }
  }, [schoolFilter]);

  useEffect(() => {
    if (textbookFilter) {
      textbooksQuery.mutate();
    }
  }, [textbookFilter]);

  useEffect(() => {
    if (location.hash === "#textbook") {
      setActiveSearch("textbook");
    } else setActiveSearch("school");
  }, [location]);

  const handleSchoolSubmit = (value, index) => {
    writeDataLayer({
      event: "search_university",
      userId: user.userId,
      universityName: value,
    });

    return navigate(schoolsQuery.data[index].academicInstitutionUrl);
  };

  const handleTextbookSubmit = (value, index) => {
    writeDataLayer({
      event: "search_course",
      userId: user.userId,
      courseName: value,
    });

    return navigate(textbooksQuery.data[index].courseUrl);
  };

  return (
    <>
      <Head slug="/onboard" />

      <Div className="page-60 flex-col gap-3">
        <Txt.H1 className="h2 paragraph">
          Add new modules by selecting a university or textbook
        </Txt.H1>

        <Div className={styles.SearchBox}>
          <div className={styles.SearchBox__btns}>
            <Txt.A
              no-decoration
              active={String(activeSearch === "school")}
              to="#school"
            >
              Search by school
            </Txt.A>
            <Txt.A
              active={String(activeSearch === "textbook")}
              no-decoration
              to="#textbook"
            >
              Search by textbook
            </Txt.A>
          </div>
          <div className={styles.SearchBox__select}>
            <div className={styles.Icon}>
              <RiSearch2Line />
            </div>
            <If cond={activeSearch === "school"}>
              <Dropdown
                no-decoration
                dropdown={schools.map((school) => school.name)}
                title="Course"
                footer="Can't find?"
                placeholder="Enter the name of your school"
                type="search"
                onChange={(e) => setSchoolFilter(e.target.value)}
                onSubmit={handleSchoolSubmit}
              />
            </If>

            <If cond={activeSearch === "textbook"}>
              <Dropdown
                no-decoration
                dropdown={textbooks.map((textbook) => textbook.name)}
                title="Textbooks"
                footer="Can't find?"
                placeholder="Enter the name of your textbook"
                type="search"
                onChange={(e) => setTextbookFilter(e.target.value)}
                onSubmit={handleTextbookSubmit}
              />
            </If>
          </div>
        </Div>

        <Div className={styles.Popular}>
          <If cond={popularAcademies.data?.length && activeSearch === "school"}>
            <Txt.Span>Popular universities:</Txt.Span>
            <Div className={styles.popular}>
              {popularAcademies.data?.map((school, index) => (
                <Txt.A key={index} no-decoration to={school.link}>
                  <FaUniversity /> {school.name}
                </Txt.A>
              ))}
            </Div>
          </If>
          <If
            cond={popularTextbooks.data?.length && activeSearch === "textbook"}
          >
            <Txt.Span>Popular textbooks:</Txt.Span>
            <Div className={styles.popular}>
              {popularTextbooks.data?.map((textbook, index) => (
                <Txt.A key={index} no-decoration to={textbook.link}>
                  <BsBookmarksFill /> {textbook.name}
                </Txt.A>
              ))}
            </Div>
          </If>
        </Div>
      </Div>
    </>
  );
}
