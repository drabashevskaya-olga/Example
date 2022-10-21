import React, { useState, useContext } from "react";
import Popup from "../popup";
import { Form, Input, InputFile } from "../../parts/form";
import { H2, P, B } from "../../parts/txt";
import { Button } from "../../parts/button";
import { Div } from "../../parts/general";
import { UserCtx } from "../../Ctx/User";
import If from "../renderIf";
import { useMutation } from "react-query";
import { APIuploadSyllabus } from "../../API/all/general";
import {
  is_invalid_email,
  len,
  isBetween,
  generate_errors,
} from "../../validators";
import AuthError from "../../pages/auth/parts/error";

/**
 * @show -> will set weather the modal is shown.
 * @onHide -> a function that will be called when the user clicks on X
 */

export default function UploadSyllabus(props) {
  const { user } = useContext(UserCtx);
  const [form, setForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitForm = useMutation(() => APIuploadSyllabus(form), {
    onSuccess: () => setSuccess(true),
  });

  const handleChange = (e) => {
    if (errors.length) setErrors([]);

    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    let newErrors = [];

    if (user.type === "guest") {
      newErrors.push(is_invalid_email(form.contactFormEmail || ""));

      if (!isBetween(2, len(form.moduleName || ""), 50)) {
        newErrors.push("Module name is invalid");
      }
    }

    if (!isBetween(2, len(form.moduleCode || ""), 50)) {
      newErrors.push("Module code is invalid");
    }
    if (!isBetween(2, len(form.universityName || ""), 50)) {
      newErrors.push("University name is invalid");
    }

    newErrors = generate_errors(...newErrors);

    if (newErrors.length) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      submitForm.mutate();
    }
  };

  const handleFile = (files) => setForm({ ...form, file: files[0] });

  if (success) {
    return (
      <Popup {...props} centered>
        <Div className="flex-col w-100">
          <H2>Thank you!</H2>
          <P>We will notify you by email address.</P>
          <Button className="py-2 px-3" onClick={props.onHide}>
            Ok
          </Button>
        </Div>
      </Popup>
    );
  }
  return (
    <Popup {...props} centered>
      <Div className="p-3">
        <Div className="text-center">
          <H2>Upload your syllabus</H2>
          <P className="text-secondary">
            and we will create a personalized module (just for you) in less than{" "}
            <B>48 hours</B>...
          </P>
        </Div>
        <If cond={errors.length}>
          <AuthError errors={errors} />
          <br />
        </If>
        <Form className="flex-col gap-3" onSubmit={handleSubmit}>
          <If cond={user.type === "guest"}>
            <Input
              placeholder="Email Address"
              name="contactFormEmail"
              onChange={handleChange}
            />
            <Input
              placeholder="Module Name"
              name="moduleName"
              onChange={handleChange}
            />
          </If>
          <Input
            placeholder="Module Code"
            name="moduleCode"
            onChange={handleChange}
          />
          <Input
            placeholder="University Name"
            name="universityName"
            onChange={handleChange}
          />
          <InputFile multiple={false} onChange={handleFile} />
          <If cond={submitForm.isLoading}>
            <Button block disable="true" loading={true}></Button>
          </If>
          <If cond={!submitForm.isLoading}>
            <Button block>Upload my syllabus</Button>
          </If>
        </Form>
      </Div>
    </Popup>
  );
}
