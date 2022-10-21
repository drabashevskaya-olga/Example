import React from "react";
import { Div } from "../../parts/general";
import { A, Span } from "../../parts/txt";
import { genId } from "../../parts/functions";

export default function Breadcrums(props) {
  const render = (jsx, index) => {
    if (Array.isArray(jsx)) {
      return jsx.map(render);
    } else if (Object(jsx) === jsx) {
      return (
        <React.Fragment key={genId("bread")}>
          {jsx}
          {index !== props.children.length - 1 && <Span>/</Span>}
        </React.Fragment>
      );
    }
    return jsx;
  };
  return (
    <Div {...props} className={`flex gap-3 ${props.className || ""}`}>
      {render(props.children)}
    </Div>
  );
}
