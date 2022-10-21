import React from "react";
import PageNotFound404Img from "../../assets/images/404.png";
import { Button } from "../../parts/button";
import { H1, A } from "../../parts/txt";
import { BiHomeAlt } from "react-icons/bi";
import Head from "../../components/Head";

const codes = {
  404: (
    <>
      Page not found
      <br />
      or the address does not exist anymore
    </>
  ),
  500: (
    <>
      An error occurred during
      <br />
      the operation
    </>
  ),
  401: <>Unexpected Error</>,
};

export default ({ code }) => {
  return (
    <>
      <Head slug={"/error"} />
      <div className="page py-5 flex-col gap-3">
        <img
          alt="proprep PageNotFound404Img"
          src={PageNotFound404Img}
          style={{ maxWidth: "75vw" }}
        />
        <H1 className="text-center">{codes[code] || codes[404]}</H1>
        <A no-decoration to="/">
          <Button className="py-2 px-5 fs-m" glow>
            <BiHomeAlt />
            Home
          </Button>
        </A>
      </div>
    </>
  );
};
