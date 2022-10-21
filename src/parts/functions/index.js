import React from "react";

const toString = (txt) => txt?.toString() || "";

// React will not pass empty attributes such as `block` or `no-radius`,
// you will have to specify the value like so: `block="true"` and so on,
// its because `block` is not an attribute but just a prop.
// so the function below will convert any `block=true` to `block="true"`
// and its also nice to have all costum-attributes listed - you can find their css rules under `styles/_attributes.scss`

const customAttributes = [
  "block",
  "no-radius",
  "glow",
  "decoration",
  "no-decoration",
  "loading",
];

const renderProps = (props, more = []) => {
  let newProps = exclude(props, "children");

  const filter = [...more, ...customAttributes];
  for (const key of filter) {
    if (typeof newProps[key] === "boolean") {
      if (newProps[key]) {
        newProps[key] = "true";
      } else newProps[key] = "";
    }
  }

  return newProps;
};

const genId = (ref = "id") =>
  `${ref}-${(Math.random() + 1).toString(36).substring(7)}-${Math.floor(
    Math.random() * 10000
  )}`;

const exclude = (obj, exc) =>
  Object.keys(obj).reduce((value, crrKey) => {
    if (crrKey !== exc) {
      value[crrKey] = obj[crrKey];
    }
    return value;
  }, {});

const scrollToElement = (ref, offset = 200) => {
  const elem = document.querySelector(ref);

  if (!elem) return;

  window.scrollTo({
    top: elem.offsetTop - offset,
  });
};

function isInViewport(elem) {
  // if elem is a reference to an element
  if (typeof elem === "string") {
    elem = document.querySelector(elem);
  }

  if (!elem) return false;

  const rect = elem.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const getActiveElement = (refs = []) => refs.filter(isInViewport);

function deepCopy(obj) {
  if (React.isValidElement(obj)) {
    return React.cloneElement(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }
  if (Object(obj) === obj) {
    let newObj = {};
    Object.keys(obj).forEach((key) => (newObj[key] = deepCopy(obj[key])));
    return newObj;
  }
  return obj;
}

export {
  toString,
  renderProps,
  genId,
  exclude,
  scrollToElement,
  isInViewport,
  getActiveElement,
  deepCopy,
};
