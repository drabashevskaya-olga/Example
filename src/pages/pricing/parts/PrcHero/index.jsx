import React from "react";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";

export default function PrcHero() {
  return (
    <Div className={`page bg-light pt-5 pb-2`}>
      <Div className="text-center">
        <Txt.H1>
          Try any plan{" "}
          <Txt.Span className="text-success">free for 14 days</Txt.Span>
        </Txt.H1>
        <Txt.P>
          <Txt.Span>Access all learning content.</Txt.Span>
          <br />
          <Txt.Span className="border-bottom border-primary">
            30 days money-back guarantee.
          </Txt.Span>
        </Txt.P>
      </Div>
    </Div>
  );
}
