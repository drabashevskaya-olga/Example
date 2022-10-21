import React from "react";
import { Div } from "../../../../parts/general";
import { Span } from "../../../../parts/txt";
import If from "../../../../components/renderIf";

/**
 * @param errors string[]
 * @returns {JSX.Element}
 */
export default function AuthError({ errors = [], children }) {
  return (
    <If cond={errors?.length || (children && typeof children === "string")}>
      <Div
        className="bg-danger px-4 py-2 text-white radius-small flex-col align-items-start"
        block
      >
        <If cond={errors?.length}>
          {errors.map((error, index) => (
            <Span key={index}>{error}</Span>
          ))}
        </If>
        <If cond={children}>
          <Span>{children}</Span>
        </If>
      </Div>
    </If>
  );
}
