import React, { useState, useEffect } from "react";
import { UserCtx } from "../../../../Ctx/User";
import { LocaleCtx } from "../../../../Ctx/Locale";
import { useNavigate } from "react-router-dom";
import { XL, P } from "../../../../parts/txt";
import { Button } from "../../../../parts/button";
import { Dropdown } from "../../../../parts/form";
import styles from "./style.module.scss";
import { Div } from "../../../../parts/general";
import { RiSearch2Line } from "react-icons/ri";
import { GoPlay } from "react-icons/go";
import { useMutation } from "react-query";
import { APIfindAcademyByName } from "../../../../API/all/general";
import writeDataLayer from "../../../../components/dataLayer";

export default function HomeHero() {
  const { user } = React.useContext(UserCtx);
  const { locale } = React.useContext(LocaleCtx);
  const navigate = useNavigate();

  const [filter, setFilter] = useState("");
  const [schools, setSchools] = useState([]);

  const schoolsQuery = useMutation(
    () => APIfindAcademyByName({ name: filter }),
    {
      onSuccess: (data) => {
        setSchools(data);
      },
    }
  );

  const handleSchoolSubmit = (value, index) => {
    writeDataLayer({
      event: "search_course",
      userId: user.userId ?? -1,
      courseName: value,
    });
    navigate(schoolsQuery.data[index].academicInstitutionUrl);
  };

  useEffect(() => {
    schoolsQuery.mutate();
  }, [filter]);

  return (
    <>
      <Div className={styles.Container}>
        <XL>{locale.home.HomeHero.headline}</XL>
        <P className="paragraph">
          Bite-sized video tutorials, study guides and practice questions
          customized to your school course, course and major textbooks
        </P>
        <Div className={styles.Search}>
          <Div className={styles.Icon}>
            <RiSearch2Line />
          </Div>
          <Dropdown
            dropdown={schools.map((school) => school.name)}
            title="University"
            type="search"
            footer=""
            placeholder="Enter the name of your school"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            onSubmit={handleSchoolSubmit}
          />
        </Div>
        <br />
        <Button glow onClick={() => navigate("/#see-how-it-works")}>
          See how it works <GoPlay />
        </Button>
      </Div>
    </>
  );
}
