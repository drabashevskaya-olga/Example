import React from "react";
import InputFile from "./inputFile";
import { renderProps } from "../functions";
import "./style.scss";
import Dropdown from "./dropdown";
import Checkbox from "./checkbox";

import { FaSnowman } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import If from "../../components/renderIf";

const Form = (props) => (
  <form
    {...renderProps(props)}
    onSubmit={(e) => {
      e.preventDefault();
      if (typeof props.onSubmit === "function") props.onSubmit(e);
    }}
  >
    {props.children}
  </form>
);

const Input = (props) => (
  <input
    {...renderProps(props)}
    className={`form-control py-2 ${props.className || ""}`}
  />
);

const Textarea = (props) => (
  <textarea
    {...renderProps(props)}
    className={`form-control py-2 ${props.className || ""}`}
  ></textarea>
);

const Select = (props) => (
  <div className="select">
    <div className={`icon ${React.isValidElement(props.icon) ? "icons" : ""}`}>
      <BiChevronDown />
      <If cond={React.isValidElement(props.icon)}>{props.icon}</If>
    </div>
    <select {...renderProps(props)}>{props.children}</select>
  </div>
);

export { Form, Input, Checkbox, Dropdown, Textarea, Select, InputFile };
