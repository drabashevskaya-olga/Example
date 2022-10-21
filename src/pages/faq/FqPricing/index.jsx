import React from "react";
import { Div } from "../../../parts/general";
import { H3, P, A } from "../../../parts/txt";

export default function FqPricing() {
  return (
    <Div className="page row" block>
      <Div className="col-md-6 col-sm-12 p-4">
        <H3>How does the pricing work?</H3>
        <P>
          t's important to us that you know exactly what you're paying for. All
          membership plans include full access to all our content, and you can
          choose from a monthly, quarterly or yearly plan. For detailed pricing
          information, <A to="/pricing">click here.</A>
        </P>
      </Div>
      <Div className="col-md-6 col-sm-12 p-4">
        <H3>What is your money-back guarantee policy?</H3>
        <P>
          If you try one of our plans and feel that we don’t live up to your
          expectations, you have 30 days to cancel your membership free of
          charge.
        </P>
      </Div>
    </Div>
  );
}
