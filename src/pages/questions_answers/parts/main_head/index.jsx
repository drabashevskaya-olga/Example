import React from "react";
import { H1, B, A, P } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";
import Breadcrums from "../../../../components/breadcrums";
import styles from "./style.module.scss";

export default function Head() {
    return (
        <>
            <Div className={styles.Head}>
                <Div className="page flex-col pt-5 pb-3 align-items-start">
                    <Breadcrums>
                        <A to="/">Home</A>
                    </Breadcrums>
                    <H1>Questions & Answers</H1>
                    <P>Our tutors will create a detailed video answer especially for you.</P>
                </Div>
            </Div>
        </>
    );
}