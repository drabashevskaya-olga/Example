import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { APILogin, APISignup } from "../../../../API/all/user";
import { useMutation } from "react-query";
import styles from "./style.module.scss";
import * as Form from "../../../../parts/form";
import * as Btn from "../../../../parts/button";
import * as Txt from "../../../../parts/txt";
import PartnerComments from "../../parts/comments";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Div } from "../../../../parts/general";
import If from "../../../../components/renderIf";
import AuthOr from "../../../../pages/auth/parts/or";
import AuthSocial from "../../../../pages/auth/parts/AuthSocial";
import AuthError from "../../../../pages/auth/parts/error";
import {
  is_invalid_email,
  is_invalid_password,
  is_invalid_name,
} from "../../../../validators";

export default function PartnerContact() {
  const [searchParams] = useSearchParams();
  const [errors, setErrors] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    academicId: searchParams?.get("academyId") || "",
  });
  localStorage.setItem("partner", searchParams?.get("academyId"));

  const handleSetForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
    setErrors([]);
  };

  const handleLoginSubmit = () => {
    const isEmailInvalid = is_invalid_email(form.email);
    const isPasswordInvalid = is_invalid_password(form.password);

    let newErrors = [];

    if (isEmailInvalid) {
      newErrors.push(isEmailInvalid);
    }
    if (isPasswordInvalid) {
      newErrors.push(isPasswordInvalid);
    }

    if (newErrors.length) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      submitLoginForm.mutate();
    }
  };

  const handleSignup = () => {
    const isEmailInvalid = is_invalid_email(form.email);
    const isPasswordInvalid = is_invalid_password(form.password);
    const isUsernameInvalid = is_invalid_name(form.FullName);

    let newErrors = [];

    if (isEmailInvalid) {
      newErrors.push(isEmailInvalid);
    }
    if (isPasswordInvalid) {
      newErrors.push(isPasswordInvalid);
    }
    if (isUsernameInvalid) {
      newErrors.push(isUsernameInvalid);
    }

    if (newErrors.length) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      submitSignupForm.mutate({
        ...form,
        firstName: form.FullName.split(" ")[0],
        lastName: form.FullName.split(" ")[1],
      });
    }
  };

  const submitSignupForm = useMutation(APISignup, {
    onSuccess: (res) => {
      localStorage.setItem("token", res.data?.token);
      localStorage.setItem("signup", "site");
      localStorage.setItem("partner", searchParams.get("academyId"));

      window.location.href = "/mycourses";
    },
    onError: (error) => {
      setErrors([error.response?.data || "Something went wrong"]);
    },
  });

  const submitLoginForm = useMutation(() => APILogin(form), {
    onSuccess: (res) => {
      localStorage.setItem("token", res.data?.token);
      localStorage.setItem("logged_in", "site");
      localStorage.setItem("partner", searchParams.get("academyId"));
      window.location.href = "/mycourses";
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        // wrong email or password
        setErrors(["We didn't recognize those details-please try again"]);
      } else {
        // server error
        setErrors(["Unexpected error"]);
      }
    },
  });

  return (
    <>
      <Div className={styles.Container}>
        <Container className="px-0 px-lg-2">
          <Row className="justify-content-left align-items-start">
            <Col xs={{ order: 2 }} lg={{ span: 6, order: 1 }}>
              <Div className="">
                <If cond={showLogin}>
                  <Form.Form
                    onSubmit={handleLoginSubmit}
                    className={`flex-col gap-3`}
                  >
                    <AuthError errors={errors} />
                    <Form.Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={handleSetForm}
                    />
                    <Form.Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={handleSetForm}
                    />
                    <Btn.Thick block variant="success" type="submit">
                      Login
                    </Btn.Thick>
                    <Div className="text-left fs-sm fw-medium w-100">
                      <Txt.Span>Don't have an account yet? </Txt.Span>
                      <Txt.A
                        disabled
                        className={`fs-cmnt-l d-inline-block ${styles.LoginLinks}`}
                        onClick={() => setShowLogin(false)}
                      >
                        Sign up
                      </Txt.A>
                    </Div>
                    <AuthOr />

                    <AuthSocial />
                  </Form.Form>
                </If>
                <If cond={!showLogin}>
                  <Form.Form className={`flex-col gap-3`}>
                    <AuthError errors={errors} />
                    <label className={styles.Label}>
                      Email
                      <Form.Input
                        type="email"
                        name="email"
                        onChange={handleSetForm}
                      />
                    </label>
                    <label className={styles.Label}>
                      Password
                      <Form.Input
                        type="password"
                        name="password"
                        onChange={handleSetForm}
                      />
                    </label>
                    <label className={styles.Label}>
                      Full name
                      <Form.Input
                        type="text"
                        name="FullName"
                        onChange={handleSetForm}
                      />
                    </label>
                    <Div className="fs-cmnt-s w-100">
                      By clicking Get Started, you agree to our
                      <Txt.A to="/Terms-of-Service" className={styles.Links}>
                        Terms of Service
                      </Txt.A>{" "}
                      and
                      <Txt.A to="/privacy-notice" className={styles.Links}>
                        Privacy Policy
                      </Txt.A>
                      .
                    </Div>
                    <Div className="text-left fs-sm fw-medium w-100">
                      <Txt.Span>Already have a user? - </Txt.Span>
                      <Txt.A
                        disabled
                        className={`fs-cmnt-l d-inline-block ${styles.LoginLinks}`}
                        onClick={() => setShowLogin(true)}
                      >
                        Log in
                      </Txt.A>
                    </Div>
                    <Div className={`w-100 ${styles.BtnDashed}`}>
                      <Btn.Button block type="button" onClick={handleSignup}>
                        Get Started
                      </Btn.Button>
                    </Div>
                    <AuthOr />

                    <AuthSocial method="logged_in" />
                  </Form.Form>
                </If>
              </Div>
            </Col>
            <Col xs={{ order: 1 }} lg={{ span: 6, order: 2 }}>
              <PartnerComments />
            </Col>
          </Row>
        </Container>
      </Div>
    </>
  );
}
