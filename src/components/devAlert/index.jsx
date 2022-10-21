import React from "react";

export default function DevAlert(props) {
  return (
    <div className="flex p-5 bg-dark">
      <span style={{ color: "red" }}>{props.children || "IN BUILD"}</span>
    </div>
  );
}
