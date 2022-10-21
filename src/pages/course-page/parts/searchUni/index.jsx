import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserCtx } from "../../../../Ctx/User";
import { Div } from "../../../../parts/general";
import styles from "./style.module.scss";
import * as Txt from "../../../../parts/txt";
import { Dropdown } from "../../../../parts/form";
import { BiSearch } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useMutation } from "react-query";
import { APIfindAcademyByName } from "../../../../API/all/general";
import writeDataLayer from "../../../../components/dataLayer";

export default function CsSearchUni() {
  const navigate = useNavigate();
  const { user } = React.useContext(UserCtx);

  const [schools, setSchools] = useState([]);

  const search = useMutation(APIfindAcademyByName, {
    onSuccess: (data) => {
      setSchools(data);
    },
  });

  const handleSchoolSubmit = (value, index) => {
    writeDataLayer({
      event: "search_university",
      userId: user.userId,
      universityName: value,
    });

    return navigate(schools[index].academicInstitutionUrl);
  };

  return (
    <Div className={styles.Container}>
      <Txt.H3>Find a customized course to your university</Txt.H3>{" "}
      <AiOutlineQuestionCircle />
      <Div className={styles.tooltip}>
        Our award-winning technology means that we can customize this general
        course to your exact school syllabus in minutes. When we know where you
        study, we can make sure you get exactly the material you need to
        succeed.
      </Div>
      <hr />
      <Div>
        <Div className={styles.Icon}>
          <BiSearch />
        </Div>
        <Dropdown
          dropdown={schools.map((school) => school.name)}
          title="Course"
          type="search"
          footer="Can't find?"
          placeholder="Enter the name of your school"
          onChange={(e) => search.mutate({ name: e.target.value })}
          onSubmit={handleSchoolSubmit}
        />{" "}
      </Div>
    </Div>
  );
}
