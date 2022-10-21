import React from "react";
import styles from "./style.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";
import { Button } from "../../../../parts/button";

import mainImage from "../../../../assets/partner/content-circle.png";
import mainImageMobile from "../../../../assets/partner/content-circle-mobile.png";

export default function PartnerImage() {
  return (
    <>
      <Div className={styles.Container}>
        <Container>
          <Row className="justify-content-left align-items-start">
            <Col s="true" lg="6" className={styles.Col}>
              <Txt.H2 className="fs-xl my-4">
                Get trustworthy resources, created especially for you
              </Txt.H2>
              <Txt.P className={`fs-m my-5 ${styles.Text}`}>
                Our award-winning technology enables us to create a new course
                especially for you within 48 hours, based on the exact
                requirements of your uni degree. Best of all, it’s free of
                charge!
              </Txt.P>
              <Div className={styles.BtnDashed}>
                <Button to="#sign-up-anchor">Start Today</Button>
              </Div>
            </Col>
          </Row>
        </Container>
        <Div className="position-relative">
          <Div className={styles.ImageWrapper}>
            <img
              alt="proprep theme image"
              src={mainImage}
              className="d-none d-lg-block"
            />
            <img
              alt="proprep theme image"
              src={mainImageMobile}
              className="d-block d-lg-none"
            />
          </Div>
        </Div>
      </Div>
    </>
  );
}
