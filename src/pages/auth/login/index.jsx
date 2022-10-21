import React, { useState } from "react";
import * as Txt from "../../../parts/txt";
import * as Form from "../../../parts/form";
import * as Btn from "../../../parts/button";
import { Div } from "../../../parts/general";
import AuthHeadline from "../parts/headline";
import AuthOr from "../parts/or";
import AuthSocial from "../parts/AuthSocial";
import styles from "../styles/style.module.scss";

import ResetPassword from "../reset_password";

import { BasicCardWrraper, BasicCard } from "../../../components/basicCard";

import LockSvg from "../../../assets/Login/icon-lock";
import BrushSvg from "../../../assets/Login/icon-brush";
import QuestionSvg from "../../../assets/Login/icon-question";
import Head from "../../../components/Head";

import { APILogin } from "../../../API/all/user";
import { useMutation } from "react-query";
import AuthError from "../parts/error";
import {
  is_invalid_email,
  is_invalid_password,
  generate_errors,
} from "../../../validators";

export default function Login() {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);

  const handleSetForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
    setErrors([]);
  };

  const handleRemember = ({ target }) => setRemember(target.checked);

  const submitForm = useMutation(() => APILogin(form), {
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("logged_in", "site");
      window.location.href = "/mycourses";
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        setErrors(["We didn't recognize those details-please try again"]);
      } else {
        setErrors(["Unexpected error"]);
      }
    },
  });

  const handleSubmit = () => {
    const isEmailInvalid = is_invalid_email(form.email);
    const isPasswordInvalid = is_invalid_password(form.password);

    let newErrors = generate_errors(isEmailInvalid, isPasswordInvalid);

    if (newErrors.length) {
      setErrors(newErrors);
    } else {
      if (errors.length) {
        setErrors([]);
      }
      submitForm.mutate();
    }
  };

  return (
    <>
      <Head slug="/user/login" />
      <ResetPassword
        show={showResetPassword}
        onHide={() => setShowResetPassword(false)}
      />
      <div className={`page flex-col gap-5 ${styles.Container}`}>
        <BasicCardWrraper>
          <BasicCard>
            <QuestionSvg />
            <Txt.P>
              Ask a tutor today and get a <Txt.B>free video answer.</Txt.B>
            </Txt.P>
          </BasicCard>
          <BasicCard>
            <LockSvg />
            <Txt.P>
              <Txt.B>Full access </Txt.B>
              to our thousands of video tutorials and study guides, anytime and
              from any device.
            </Txt.P>
          </BasicCard>
          <BasicCard>
            <BrushSvg />
            <Txt.P>
              <Txt.B>Customized courses </Txt.B>
              based on your exact syllabi within 48 hours.
            </Txt.P>
          </BasicCard>
        </BasicCardWrraper>

        <Div block>
          <hr />
        </Div>

        <AuthHeadline>
          <Txt.H1>Welcome back!</Txt.H1>
          <Txt.Span>Sign in to your account to keep studying.</Txt.Span>
        </AuthHeadline>

        <Form.Form
          onSubmit={handleSubmit}
          className={`flex-col gap-3 ${styles.Form}`}
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

          <Form.Checkbox
            variant={"success"}
            className="w-100 flex gap-2 justify-content-start"
            name="remember"
            onChange={handleRemember}
            checked={remember}
          >
            <Txt.Gray className="fs-sm pointer">Rememer me</Txt.Gray>
          </Form.Checkbox>

          <Div className="flex-col gap-2 align-items-start mt-5" block>
            <Txt.Span>
              Don't have an account yet? -
              <Txt.A to="/sign-up" className="link-success mx-2 fw-bold">
                Sign up
              </Txt.A>
            </Txt.Span>

            <Btn.Thick
              block
              variant="success"
              type="submit"
              loading={submitForm.isLoading}
            >
              Log in
            </Btn.Thick>
            <Txt.A
              disabled
              className="fs-sm"
              onClick={() => setShowResetPassword(true)}
            >
              Forgot your password?
            </Txt.A>
          </Div>

          <AuthOr />

          <AuthSocial />
        </Form.Form>
      </div>
    </>
  );
}
