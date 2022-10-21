import React from "react";
import ContactUsForm from "./form";
import ContactUsText from "./text";
import Head from "../../components/Head";

export default function ContactUs() {
  return (
    <>
      <Head slug="/contact-us" />
      <ContactUsText />
      <ContactUsForm />
    </>
  );
}
