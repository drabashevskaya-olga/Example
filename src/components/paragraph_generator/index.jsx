import React from "react";
import * as Txt from "../../parts/txt";
import parse from "html-react-parser";

const renderH1 = (item, index) => (
  <Txt.H1 key={index}>{parse(item.content)}</Txt.H1>
);
const renderH2 = (item, index) => (
  <Txt.H2 key={index}>{parse(item.content)}</Txt.H2>
);
const renderH3 = (item, index) => (
  <Txt.H3 key={index}>{parse(item.content)}</Txt.H3>
);
const renderSpan = (item, index) => (
  <Txt.Span key={index}>{parse(item.content)}</Txt.Span>
);
const renderP = (item, index) => (
  <Txt.P key={index}>{parse(item.content)}</Txt.P>
);
const renderList = (item, index) => (
  <ol
    key={index}
    style={{
      listStyleType: item.list_style || "inherit",
      display: "flex",
      flexDirection: "column",
      gap: item.gap || "3px",
    }}
  >
    {item.content.map((li, index) => (
      <li key={index}>
        <Txt.Span>{parse(li)}</Txt.Span>
      </li>
    ))}
  </ol>
);
const TagsMap = {
  h1: renderH1,
  h2: renderH2,
  h3: renderH3,
  span: renderSpan,
  p: renderP,
  list: renderList,
};

/*
  if type is undefined -> 
    if item.content is an array, it will be automatically set to type=list
    if item.content is a string, with less then six words - type=h2, else type=p
    else 
*/
const renderJson = (item, index) => {
  if (!item.tag && item.content) {
    if (Array.isArray(item.content)) {
      item.tag = "list";
    } else {
      // if string is less then six words, its an headline, otherwise its probably a paragraph
      if (item.content.split(" ").length <= 6) {
        item.tag = "h2";
      } else item.tag = "p";
    }
  }

  if (typeof TagsMap[item.tag] !== "function") {
    item.tag = "p";
    item.content = `<span style="color: red;">Invalid type for: ${
      item.content || `field on index ${index}`
    }</span>`;
  }

  return TagsMap[item.tag](item, index);
};

const ParagraphGenerator = ({ json }) => json.map(renderJson);

export default ParagraphGenerator;
