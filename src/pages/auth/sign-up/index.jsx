import React, { useState, useEffect } from "react";
import * as Txt from "../../../parts/txt";
import * as Form from "../../../parts/form";
import * as Btn from "../../../parts/button";
import { Div } from "../../../parts/general";
import styles from "../styles/style.module.scss";
import AuthHeadline from "../parts/headline";
import AuthOr from "../parts/or";
import AuthSocial from "../parts/AuthSocial";
import Head from "../../../components/Head";
import AuthError from "../parts/error";
import {
  is_empty,
  is_invalid_email,
  is_invalid_password,
  is_invalid_name,
  generate_errors,
  isEmpty,
} from "../../../validators";
import { useMutation } from "react-query";
import { APISignup } from "../../../API/all/user";

/**
 * @param {string} returnUrl
 */

export default function SignUp(props) {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleForm = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const handleAgreeToTerms = ({ target }) => setAgreeToTerms(target.checked);

  const submitForm = useMutation((form) => APISignup(form), {
    onSuccess: (res) => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("signup", "site");
      window.location.href = props.returnUrl || "/choose-university";
    },
    onError: (err) => {
      setErrors(generate_errors(err.response?.data || "Unexpected error"));
    },
  });

  useEffect(() => {
    if (errors.length) {
      setErrors([]);
    }
  }, [form]);

  const handleSubmit = () => {
    if (!agreeToTerms) {
      return setErrors(["You must agree to the terms and conditions"]);
    }

    const isEmpty = is_empty(form.email, form.password, form.name);
    const isNameInvalid = is_invalid_name(form.name);
    const isEmailInvalid = is_invalid_email(form.email);
    const isPasswordInvalid = is_invalid_password(form.password);

    const newErrors = generate_errors(
      isEmpty,
      isNameInvalid,
      isEmailInvalid,
      isPasswordInvalid
    );

    setErrors(newErrors);

    if (newErrors.length) return;

    submitForm.mutate({
      email: form.email,
      firstName: form.name.split(" ")[0],
      lastName: form.name.substring(form.name.split(" ")[0].length + 1),
      password: form.password,
    });
  };

  return (
    <>
      <Head slug="/sign-up" />
      <div className={`page flex-col gap-5 ${styles.Container}`}>
        <AuthHeadline>
          <Txt.H1>Create your free account</Txt.H1>
          <Txt.Span>
            +50,000 students use Proprep in their STEM studies.
          </Txt.Span>
        </AuthHeadline>

        <Form.Form
          onSubmit={handleSubmit}
          className={`flex-col gap-3 ${styles.Form}`}
        >
          <AuthError errors={errors} />
          <Form.Input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleForm}
          />
          <Form.Input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleForm}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleForm}
          />
          <Form.Checkbox
            variant={"success"}
            className="w-100 flex gap-2 justify-content-start"
            onChange={handleAgreeToTerms}
            value={agreeToTerms}
          >
            <Txt.Gray className="fs-sm fw-light pointer">
              I agree to the{" "}
              <Txt.A href="/terms-of-service" target="_blank">
                Terms Of Service
              </Txt.A>{" "}
              and Privacy Notice
            </Txt.Gray>
          </Form.Checkbox>
          <Div className="flex-col gap-2 align-items-start mt-5" block>
            <Txt.Span>
              Already have a user? -
              <Txt.A to="/user/login" className="link-success mx-2 fw-bold">
                Log in
              </Txt.A>
            </Txt.Span>

            <Btn.Thick block variant="success" type="submit">
              Get started
            </Btn.Thick>
          </Div>
          <AuthOr />
          <AuthSocial />
        </Form.Form>
      </div>
    </>
  );
}
