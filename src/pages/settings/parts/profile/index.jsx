import React, { useState, useEffect } from "react";
import { Form, Input, Checkbox } from "../../../../parts/form";
import { H2, Gray, Label } from "../../../../parts/txt";
import { Thick } from "../../../../parts/button";
import { UserCtx } from "../../../../Ctx/User";
import { useMutation } from "react-query";
import { APIupdateProfile } from "../../../../API/all/user";

export default function ManageProfile() {
  const { user } = React.useContext(UserCtx);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user.firstName || user.lastName) {
      setName(user.firstName + " " + user.lastName);
    }

    if (user.email) {
      setEmail(user.email);
    }
  }, [user]);

  const submit = useMutation(() => APIupdateProfile(email, name), {
    onSuccess: () => window.location.reload(),
  });

  return (
    <Form>
      <H2>Profile</H2>
      <br />
      <Label htmlFor="name">
        <Gray>Name</Gray>
      </Label>
      <Input
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Label htmlFor="email">
        <Gray>Email</Gray>
      </Label>
      <Input
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <Checkbox className="flex gap-2 justify-content-start pointer">
        <Gray>Allow email notifications</Gray>
      </Checkbox>
      <br />
      <Thick block onClick={submit.mutate}>
        Change
      </Thick>
    </Form>
  );
}
