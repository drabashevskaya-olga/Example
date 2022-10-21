import React, { useEffect, useState, useRef } from "react";
import { Input } from "..";
import If from "../../../components/renderIf";
import { Gray, A, Span } from "../../txt";
import styles from "./style.module.scss";
import { renderProps } from "../../functions";

/**
 * @param title jsx
 * @param footer jsx
 * @param whenEmpty jsx
 * @param dropdown string[]
 * @returns
 */

export default function Dropdown(props) {
  const [show, setShow] = useState(false);
  const [activeOption, setActiveOption] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const dropdown = useRef();
  const containerRef = useRef();

  const syncSizes = () => {
    try {
      const input = containerRef.current.children[0];
      const dropdown = containerRef.current.children[1];

      dropdown.style.width = input.clientWidth + "px";
    } catch {}
  };
  useEffect(syncSizes, [containerRef]);

  window.addEventListener("resize", syncSizes);

  useEffect(() => {
    // acts like an onBlur(), but better (not really)
    if (show) {
      window.addEventListener("click", (e) => {
        try {
          if (
            props.dropdown.includes(e.target.innerHTML) || // checks if user clicked one of the options
            e.target === dropdown.current.parentElement.previousSibling // you dont wanna close the dropdown when user clicks on the input
          ) {
            return;
          }
          Close();
        } catch {
          Close(); // somethimes element are not found and stuff
        }
      });
    }
  }, [show]);

  const Close = () => {
    setShow(false);
    setActiveOption(0);
  };

  const Pick = (value) => {
    setSearchValue(value);
    if (typeof props.onSubmit === "function") {
      props.onSubmit(value, props.dropdown.indexOf(value));
    }
    Close();
  };

  const Change = (e) => {
    setSearchValue(e.target.value);
    if (typeof props.onChange === "function") {
      props.onChange(e);
    }
    if (e.target.value === "") {
      Close();
    } else if (!show) setShow(true);
  };

  const HandleKeyDown = (e) => {
    if (typeof props.onKeyDown === "function") {
      props.onKeyDown(e);
    }

    if (!props.dropdown.length) return;

    if (!show) return;

    const activeSpanElement = dropdown.current.children[activeOption];

    if (e.code === "Enter") return activeSpanElement.click();

    const spanHeight = activeSpanElement?.offsetHeight || 50;
    const offsetTop = 2; // activeSpan has two non-active element above, and will not stick to the top

    if (e.code === "ArrowDown") {
      if (activeOption >= props.dropdown.length - 1) return;

      dropdown.current.scrollTop = (activeOption - offsetTop) * spanHeight;
      setActiveOption((prv) => prv + 1);
    } else if (e.code === "ArrowUp") {
      if (activeOption <= 0) return;

      dropdown.current.scrollTop = (activeOption - offsetTop) * spanHeight;
      setActiveOption((prv) => prv - 1);
    }
  };

  return (
    <div block="true" ref={containerRef}>
      <Input
        {...renderProps(props)}
        value={searchValue}
        onChange={Change}
        onKeyDown={HandleKeyDown}
      />
      <div className={styles.DropDown} hidden={!show}>
        <If cond={!!props.title}>
          <Span className={styles.Title}>{props.title}</Span>
        </If>
        <If cond={props.dropdown.length}>
          <div className={styles.options} ref={dropdown}>
            {props.dropdown.map((item, index) => (
              <Span
                key={index}
                onClick={() => Pick(item)}
                className={activeOption === index ? styles.active : ""}
                id={activeOption === index ? "activeSpan" : ""}
              >
                {item}
              </Span>
            ))}
          </div>
        </If>
        <If cond={!props.dropdown.length || props.whenEmpty}>
          <div className={styles.Empty}>
            <Span>No Results Found</Span>
          </div>
        </If>
        <If cond={!!props.footer}>
          <Gray className={styles.Footer}>{props.footer}</Gray>
        </If>
      </div>
    </div>
  );
}
