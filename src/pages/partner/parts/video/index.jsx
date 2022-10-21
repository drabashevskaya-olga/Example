import React from "react";
import styles from "./style.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";

export default function PartnerVideo() {
  return (
    <>
      <Div className={styles.Container}>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col s="true" lg="6">
              <Div className={styles.Video}>
                <iframe
                  width="100%"
                  height="100%"
                  src=" https://www.youtube.com/embed/9QQ-ty35kbA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Div>
            </Col>
            <Col s="true" lg="6">
              <Txt.H2 className="fs-xl mx-3 mx-lg-5 my-4">
                Video guides that follow your uni class or textbook
              </Txt.H2>
              <Txt.P className="fs-m mx-5">
                Master tough concepts with ease, as our tutors thoroughly
                explain everything you need to know
              </Txt.P>
            </Col>
          </Row>
        </Container>
      </Div>
    </>
  );
}
