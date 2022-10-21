import React from "react";
import "./style.scss";
import { renderProps } from "../functions";
import { A } from "../txt";
import Loader from "../../components/loader";

const BtnGroup = (props) => (
  <div
    {...renderProps(props)}
    className={`btn-group ${props.className || ""}`}
    role="group"
  >
    {props.children}
  </div>
);

const Button = (props) => {
  if (props.to || props.href) {
    return (
      <A
        {...renderProps(props)}
        no-decoration={"true"}
        className={`btn btn-${props.variant || "primary"} ${
          props.className || ""
        }`}
      >
        {props.loading ? <Loader /> : props.children}
      </A>
    );
  }

  return (
    <button
      {...renderProps(props)}
      className={`btn btn-${props.variant || "primary"} ${
        props.className || ""
      }`}
    >
      {props.loading ? <Loader /> : props.children}
    </button>
  );
};

const Outlined = (props) => {
  if (props.to || props.href) {
    return (
      <A
        {...renderProps(props)}
        no-decoration={"true"}
        className={`btn btn-outline-${props.variant || "primary"} ${
          props.className || ""
        }`}
      >
        {props.loading ? <Loader /> : props.children}
      </A>
    );
  }

  return (
    <button
      {...renderProps(props)}
      className={`btn btn-outline-${props.variant || "primary"} ${
        props.className || ""
      }`}
    >
      {props.loading ? <Loader /> : props.children}
    </button>
  );
};

const Thick = (props) => (
  <Button
    {...renderProps(props)}
    className={`${props.className || ""} py-2 fw-bold`}
  >
    {props.loading ? <Loader /> : props.children}
  </Button>
);

const BtnLink = (props) => (
  <A {...props} className={`btn btn-link`}>
    {props.loading ? <Loader /> : props.children}
  </A>
);

const Custom = (props) => {
  if (props.to || props.href) {
    return (
      <A {...props} className={`${props.className || ""} btn`}>
        {props.loading ? <Loader /> : props.children}
      </A>
    );
  }
  return (
    <button {...renderProps(props)} className={`${props.className || ""} btn`}>
      {props.loading ? <Loader /> : props.children}
    </button>
  );
};

export { Button, Outlined, Thick, BtnGroup, BtnLink, Custom };
