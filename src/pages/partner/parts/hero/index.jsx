import React, { useState, useContext } from "react";
import styles from "./style.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";
import { Button } from "../../../../parts/button";
import If from "../../../../components/renderIf";
import { UserCtx } from "../../../../Ctx/User";
import CircleImg from "../../../../assets/partner/circle-img.png";
import CircleTabletImg from "../../../../assets/partner/circle-img-tablet.png";

export default function PartnerHero() {
  const { config } = useContext(UserCtx);
  const [isMobileorTablet] = useState(
    config.device === "mobile" || config.device === "tablet"
  );

  return (
    <>
      <Div className={styles.Container}>
        <Container>
          <Row className="justify-content-left align-items-start">
            <Col xs="12" lg="6">
              <Div className="d-flex flex-column align-items-center align-items-lg-start">
                <Txt.H1 className={`${styles.Title} mx-4 my-5`}>
                  Get full support for your STEM subjects
                </Txt.H1>
                <Txt.P className={`${styles.Text} mx-4 fs-m`}>
                  Accelerate your learning with video tutorials, study guides
                  and practice questions customised to your university’s STEM
                  modules
                </Txt.P>
                <Div className={`${styles.BtnDashed} mx-4`}>
                  <Button to="#sign-up-anchor">Start Today</Button>
                </Div>
              </Div>
            </Col>
          </Row>
        </Container>
        <Div className={styles.ImageWrapper}>
          <Div
            className={`d-flex flex-column justify-content-center align-items-center ${styles.MiniCircle}`}
          >
            <Div className={styles.Price}>14 Days</Div>
            <Div className={styles.MiniText}>free trial</Div>
          </Div>
          <Div className={styles.ColorWrapper}>
            <img
              alt="proprep ColorWrapper"
              src={isMobileorTablet ? CircleTabletImg : CircleImg}
            />
          </Div>
        </Div>
      </Div>
    </>
  );
}
