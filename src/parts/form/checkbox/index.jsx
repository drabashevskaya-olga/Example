import { renderProps } from "../../functions";
import { Label } from "../../txt";
import "./style.scss";

const Checkbox = (props) => (
  <Label className={`checkbox__label ${props.className || ""}`}>
    <input
      {...renderProps(props)}
      className={`form-check-input mt-0 ${props.variant || "primary"}`}
      type="checkbox"
    />
    {props.children}
  </Label>
);

export default Checkbox;
