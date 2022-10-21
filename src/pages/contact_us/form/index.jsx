import React, { useState } from "react";
import { Form, Input, InputFile, Textarea } from "../../../parts/form";
import { H2, P, A, Gray } from "../../../parts/txt";
import { Thick } from "../../../parts/button";
import styles from "./style.module.scss";
import { APIcontactUs } from "../../../API/all/general";
import { useMutation } from "react-query";
import AuthError from "../../auth/parts/error";
import If from "../../../components/renderIf";

export default function ContactUsForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    schoolName: "",
    files: [],
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = useMutation(APIcontactUs, {
    onSuccess: () => setSuccess(true),
    onError: () => setError(true),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleFile = (files) => setForm({ ...form, files: files[0] });

  const handleSubmit = () => submitForm.mutate(form);

  if (success) {
    return (
      <div className="page flex-col py-5">
        <H2>Thanks for contacting us!</H2>
        <P>We will get back to you as soon as possible.</P>
      </div>
    );
  }
  return (
    <div className={`page ${styles.Container}`}>
      <H2 className="fw-light-headline">We'd love to hear from you!</H2>
      <P className="text-center">
        To send us your syllabus and receive a course personalized to your needs
        within 48 hours,{" "}
        <A className="link-dark" decoration>
          click here
        </A>
        .
      </P>
      <Form className={styles.Form}>
        <If cond={error}>
          <AuthError>Unexpected Error</AuthError>
        </If>
        <Input
          placeholder="Name"
          name="name"
          type="text"
          onChange={handleChange}
        />
        <Input
          placeholder="Email Address"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <Input
          placeholder="Enter your School name"
          name="schoolName"
          type="text"
          onChange={handleChange}
        />
        <Textarea
          placeholder="Write your message here"
          name="message"
          onChange={handleChange}
        />
        <Gray className="text-start fs-sm mt-2" block>
          ATTACHMENTS
        </Gray>
        <InputFile name="files" onChange={handleFile} />
        <Thick block onClick={handleSubmit}>
          Submit
        </Thick>
      </Form>
    </div>
  );
}
