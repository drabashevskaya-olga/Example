import React from "react";
import { XL } from "../../parts/txt";
import { Div } from "../../parts/general";

export default function ContentHeadline(props) {
  // * if props.children is a string -> render it as h2.xl,
  // * otherwise if its an object -> render it as it is
  // * if its a list (which means its a list of jsx elements) recursively render the function with every child
  const renderChildren = (jsx) => {
    if (Array.isArray(jsx)) {
      return jsx.map(renderChildren);
    }
    if (React.isValidElement(jsx)) {
      return jsx;
    }
    return <XL>{jsx}</XL>;
  };
  return (
    <Div
      {...props}
      className={`page py-5 bg-light text-center ${props.className || ""}`}
      block
    >
      <Div>{renderChildren(props.children)}</Div>
    </Div>
  );
}
