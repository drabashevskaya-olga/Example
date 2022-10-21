import React from "react";
import { H1, P, A } from "../../../parts/txt";

export default function ContactUsText() {
  return (
    <div className="flex-col gap-2 bg-light py-4 page">
      <H1 className="text-center pt-5">Contact us</H1>
      <P className="text-center text-gray">
        We’d love to hear from you
        <br /> Do you have questions about the platform? <br /> Whether you have
        a question that wasn't addressed in our
        <A to="/faq">
          {" "}
          FAQ section,
          <br />
        </A>
        want to give us your feedback or for anything else, our support team is
        available.
      </P>
    </div>
  );
}
