import React from "react";
import styles from "./style.module.scss";
import { Div } from "../../../../parts/general";
import { H3, P } from "../../../../parts/txt";
import { Outlined } from "../../../../parts/button";

export default function AskATutor() {
    return (
        <>
            <Div className="page flex-col pt-5 pb-3 align-items-start">
                <Div className={`w-100 p-4 ${styles.Container}`}>
                    <Div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                        <Div className={styles.Content}>
                            <H3>Ask a tutor</H3>
                            <P className={`pt-2 ${styles.Text} `}>If you have any additional questions, you can ask one of our experts.</P>
                        </Div>
                        <Div className={styles.Button}>
                            <Outlined className="px-4" to="/">Ask Now</Outlined>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}