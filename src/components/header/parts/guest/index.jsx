import React from "react";
import { BtnLink } from "../../../../parts/button";
import DropdownLink from "../dropdown_link";
import * as Btn from "../../../../parts/button";
import TextBookLink from "../textbook_link";

export function Links() {
  return (
    <>
      <TextBookLink />
      <DropdownLink
        list={[
          {
            to: "/about-us",
            label: "About us",
          },
          {
            to: "/press-room",
            label: "Press room",
          },
          {
            href: "https://blog.proprep.uk",
            label: "Blog",
          },
          {
            to: "/#see-how-it-works",
            label: "See how it works",
          },
        ]}
      >
        Why Proprep
      </DropdownLink>
      <BtnLink to="/pricing">Pricing</BtnLink>
    </>
  );
}

export function Buttons() {
  return (
    <>
      <Btn.BtnLink to="/user/login">Login</Btn.BtnLink>
      <Btn.Thick to="/sign-up" variant="success">
        Start free trial
      </Btn.Thick>
    </>
  );
}

export function MobileLinks() {
  return (
    <>
      <Btn.BtnLink to="/about-us">About us</Btn.BtnLink>
      <Btn.BtnLink to="/press-room">Press room</Btn.BtnLink>
      <Btn.BtnLink to="/blog">Blog</Btn.BtnLink>
      <Btn.BtnLink to="/#see-how-it-works">See how it works</Btn.BtnLink>
      <Btn.BtnLink to="/pricing">Pricing</Btn.BtnLink>
    </>
  );
}

export function MobileButtons() {
  return <Buttons />;
}
