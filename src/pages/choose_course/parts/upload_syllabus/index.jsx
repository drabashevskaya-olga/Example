import React, { useState } from "react";
import { Div } from "../../../../parts/general";
import { Outlined } from "../../../../parts/button";
import * as Txt from "../../../../parts/txt";
import UploadSyllabus from "../../../../components/uploadSyllabus";

export default function ChsUploadSyllabus() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <UploadSyllabus show={showModal} onHide={() => setShowModal(false)} />
      <Div className="rounded p-3 border-top border-primary border-3 shd-4">
        <Txt.H3 className="w-75">Can't find your subject or module?</Txt.H3>
        <Txt.P className="fs-cmnt-l">
          Upload your syllabus now and our team will create a customized module
          especially for you.
        </Txt.P>
        <Outlined
          className="fw-medium"
          block
          onClick={() => setShowModal(true)}
        >
          Upload Syllabus
        </Outlined>
        <br />
        <Txt.Span>
          Have a question?{" "}
          <Txt.A className="fw-bold" to="/contact-us">
            Contact us
          </Txt.A>
        </Txt.Span>
        <br />
        <Txt.Span>
          Not your university?{" "}
          <Txt.A className="fw-bold" to="/onboard">
            Search for more
          </Txt.A>
        </Txt.Span>
      </Div>
    </>
  );
}
