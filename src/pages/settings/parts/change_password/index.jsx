import React, { useState, useEffect } from "react";
import { Form, Input } from "../../../../parts/form";
import { H2, A, Gray, B, Label } from "../../../../parts/txt";
import { Thick } from "../../../../parts/button";
import ResetPassword from "../../../auth/reset_password";
import { useMutation } from "react-query";
import { APIupdatePassword } from "../../../../API/all/user";
import If from "../../../../components/renderIf";

export default function ChangePassword() {
  const [show, setShow] = useState(false);
  const [changeStatus, setChangeStatus] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submit = useMutation(
    () => APIupdatePassword(oldPassword, newPassword),
    {
      onSuccess: () => setChangeStatus("success"),
      onError: () => setChangeStatus("error"),
    }
  );

  useEffect(setChangeStatus, [oldPassword, newPassword]);

  return (
    <>
      <ResetPassword show={show} onHide={() => setShow(false)} />
      <Form onSubmit={submit.mutate}>
        <H2>Password</H2>
        <If cond={changeStatus === "success"}>
          <B className="text-success">Success</B>
          <br />
        </If>
        <If cond={changeStatus === "error"}>
          <B className="text-danger">Failed</B>
          <br />
        </If>
        <br />
        <Label htmlFor="old_password">
          <Gray>Old password</Gray>
        </Label>
        <Input
          type="password"
          placeholder="Old password"
          name="old_password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <br />
        <Label htmlFor="new_password">
          <Gray>New password</Gray>
        </Label>
        <Input
          type="password"
          placeholder="New password"
          name="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Gray className="fs-sm">Minimum 6 characters</Gray>
        <br />
        <br />
        <Thick block>Change</Thick>
        <A className="fs-sm" disabled onClick={() => setShow(true)}>
          Forgot your password?
        </A>
      </Form>
    </>
  );
}
