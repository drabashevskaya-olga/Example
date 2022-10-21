import React from "react";
import * as Txt from "../../../../parts/txt";
import { Div } from "../../../../parts/general";
import ContentHeadline from "../../../../components/contentHeadline";
import { write } from "../../../../API/useful_functions";
import Breadcrums from "../../../../components/breadcrums";

export default function ChsHeadline({ name }) {
  return (
    <ContentHeadline>
      <Div className="text-start">
        <Breadcrums className="justify-content-start">
          <Txt.A to="/">Home</Txt.A>
          <Txt.A>{write(name)}</Txt.A>
        </Breadcrums>
        <Txt.H1>{write(name)}</Txt.H1>
        <Txt.P>
          Not your university?{" "}
          <Txt.A to="/onboard" className="fw-bold">
            Search for more
          </Txt.A>
        </Txt.P>
      </Div>
    </ContentHeadline>
  );
}
