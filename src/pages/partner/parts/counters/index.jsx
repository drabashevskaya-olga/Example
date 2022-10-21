import React from "react";
import styles from "./style.module.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Div } from "../../../../parts/general";

export default function PartnerCounters() {
    return (
        <>
            <Container className="my-5 py-4">
                <Row className="text-center">
                    <Col xs="4" >
                        <Div className={styles.Number}>
                            3,5K
                        </Div>
                        <Div className="fs-m fw-bold text-center">
                            Modules
                        </Div>
                    </Col>
                    <Col xs="4" >
                        <Div className={styles.Number}>
                            12K
                        </Div>
                        <Div className="fs-m fw-bold text-center">
                            Exercises
                        </Div>
                    </Col>
                    <Col xs="4" >
                        <Div className={styles.Number}>
                            500k+
                        </Div>
                        <Div className="fs-m fw-bold text-center">
                            Students
                        </Div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}