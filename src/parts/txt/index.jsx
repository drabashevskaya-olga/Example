import "./style.scss";
import { Link } from "react-router-dom";
import { renderProps } from "../functions";

const H1 = (props) => <h1 {...renderProps(props)}>{props.children}</h1>;
const H2 = (props) => <h2 {...renderProps(props)}>{props.children}</h2>;
const H3 = (props) => <h3 {...renderProps(props)}>{props.children}</h3>;
const H4 = (props) => <h4 {...renderProps(props)}>{props.children}</h4>;
const H5 = (props) => <h5 {...renderProps(props)}>{props.children}</h5>;
const H6 = (props) => <h6 {...renderProps(props)}>{props.children}</h6>;

const XXL = (props) => (
  <H1 {...renderProps(props)} className={`fs-xxl ${props.className}`}>
    {props.children}
  </H1>
);
const XL = (props) => (
  <H2 {...renderProps(props)} className={`fs-xl ${props.className}`}>
    {props.children}
  </H2>
);

const P = (props) => <p {...renderProps(props)}>{props.children}</p>;
const Span = (props) => <span {...renderProps(props)}>{props.children}</span>;
const Label = (props) => (
  <label {...renderProps(props)}>{props.children}</label>
);
const I = (props) => <i {...renderProps(props)}>{props.children}</i>;
const A = (props) => {
  if (typeof props.href === "string") {
    return <a {...renderProps(props)}>{props.children}</a>;
  }
  return (
    <Link {...renderProps(props)} to={props.to || "#"}>
      {props.children}
    </Link>
  );
};
const B = (props) => <b {...renderProps(props)}>{props.children}</b>;

const Light = (props) => (
  <Span {...renderProps(props)} className={`fw-light ${props.className || ""}`}>
    {props.children}
  </Span>
);
const Gray = (props) => (
  <Span
    {...renderProps(props)}
    className={`fw-normal text-gray ${props.className || ""}`}
  >
    {props.children}
  </Span>
);

const U = (props) => <u {...renderProps(props)}>{props.children}</u>;

export {
  XXL,
  XL,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  I,
  A,
  Span,
  U,
  P,
  B,
  Light,
  Label,
  Gray,
};
