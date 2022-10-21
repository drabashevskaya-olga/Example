import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as Form from "../../../parts/form";
import * as Btn from "../../../parts/button";
import * as Txt from "../../../parts/txt";
import { Div } from "../../../parts/general";
import styles from "../styles/style.module.scss";
import AuthHeadline from "../parts/headline";
import { APIfindAcademyByName } from "../../../API/all/general";
import { APIupdateAcademy } from "../../../API/all/user";
import { useMutation } from "react-query";
import AuthError from "../parts/error";

export default function ChooseUni() {
  const [searchParams] = useSearchParams();

  const [chosenUni, setChosenUni] = useState("");
  const [acadmies, setAcademies] = useState([]);
  const [error, setError] = useState("");

  const acadmiesQuery = useMutation((name) => APIfindAcademyByName({ name }), {
    onSuccess: (data) => {
      setAcademies(data);
    },
  });

  const pickUni = useMutation(
    (academicId) => APIupdateAcademy({ academicId }),
    {
      onSuccess: () => {
        const returnUrl = searchParams.get("return");

        if (returnUrl) {
          return (window.location.href = returnUrl);
        } else window.location.href = "/mycourses";
      },
      onError: () => {
        setError("Unexpected error, please try again later");
      },
    }
  );

  const handleChooseUni = (academy) =>
    setChosenUni(acadmies.find((uni) => uni.name === academy).id);

  const handleSubmit = () => {
    if (!chosenUni) return setError("Please choose a university");

    pickUni.mutate(chosenUni);
  };

  const handleChange = (e) => {
    setChosenUni("");
    acadmiesQuery.mutate(e.target.value);
  };

  return (
    <Div block className={`${styles.Container} page-50 flex-col gap-5`}>
      <AuthHeadline>
        <Txt.H1>Choose your institution</Txt.H1>
        <Txt.Span>
          We have custom courses for more than 1000 institutions!
        </Txt.Span>
      </AuthHeadline>
      <Form.Form className={`flex-col gap-3 ${styles.Form}`}>
        <AuthError>{error}</AuthError>
        <Form.Dropdown
          placeholder={"institution name"}
          onChange={handleChange}
          onSubmit={handleChooseUni}
          dropdown={acadmies.map((academy) => academy.name)}
          title={"UNIVERSITY"}
          footer={
            <>
              Can't find your university?{" "}
              <Txt.A decoration to="/contact-us">
                Contact us
              </Txt.A>
            </>
          }
        />
        <Btn.Thick block variant="success" type="button" onClick={handleSubmit}>
          Submit
        </Btn.Thick>
      </Form.Form>
    </Div>
  );
}
