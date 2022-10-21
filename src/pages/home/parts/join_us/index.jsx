import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Div } from "../../../../parts/general";
import { H2, P } from "../../../../parts/txt";
import { Button } from "../../../../parts/button";
import styles from "./style.module.scss";
import { scrollToElement } from "../../../../parts/functions";

export default function JoinUs() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollToCards = () => {
    if (pathname.includes("pricing")) {
      scrollToElement("#cards", 75);
    } else {
      navigate("/pricing#cards");
    }
  };
  return (
    <Div className={`${styles.Container} text-center flex-col gap-1 py-5 px-3`}>
      <H2>Join us and start learning today</H2>
      <P>Select your plan now and get full access to all content</P>
      <br />
      <Button className="px-5" onClick={scrollToCards} glow>
        Select a plan
      </Button>
    </Div>
  );
}
