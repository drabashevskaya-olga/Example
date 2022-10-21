import React from "react";
import { BtnLink } from "../../../../parts/button";
import DropdownLink from "../dropdown_link";
import * as Btn from "../../../../parts/button";
import ProfileLink from "../profile";
import { Link } from "react-router-dom";
import TextBookLink from "../textbook_link";
import ModulesLink from "../modules_link";

export const Links = () => {
  return (
    <>
      <TextBookLink />
      <ModulesLink />
    </>
  );
};

export const Buttons = () => {
  return (
    <>
      <ProfileLink />
      <Btn.Thick to="/pricing" variant="success">
        Choose a plan
      </Btn.Thick>
    </>
  );
};

export const MobileLinks = () => (
  <>
    <BtnLink to="/pricing">Pricing</BtnLink>
    <BtnLink to="/mycourses">My Modules</BtnLink>
    <BtnLink to="/#refer-to-a-friend">Refer a friend</BtnLink>
    <BtnLink to="/user/settings">Settings</BtnLink>
    <BtnLink to={`/signout/${localStorage.getItem("token")}`}>Sign out</BtnLink>
  </>
);

export const MobileButtons = () => (
  <Btn.Thick to="/pricing" variant="success">
    Choose a plan
  </Btn.Thick>
);
