import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Div } from "../../../../parts/general";
import { H3, Span, A } from "../../../../parts/txt";
import Accordion from "react-bootstrap/Accordion";
import If from "../../../../components/renderIf";
import VideoPlayer from "../../../../pages/video_page/parts/video";

const videoAnswers = [
    {
        videoUrl: "",
        name: "Video 1 Name",
    },
    {
        videoUrl: "",
        name: "Video 2 Name",
    }
];

const video = [
    {
        video: "",
        token: "",
        subTitles: "",
    }
]

export default function ExpertSolution() {
    const [data, setData] = useState([]);
    const [activeKey, setActiveKey] = useState(-1);
  
    return (
        <>
            <Div className="page flex-col pt-5 pb-3 align-items-start">
                <Div className={`w-100 p-4 ${styles.Container}`}>
                    <Div className="d-flex flex-column flex-lg-row justify-content-between align-items-start">
                        <Div className={styles.Content}>
                            <H3>Expert Solution</H3>

                            <Div className="d-flex flex-col flex-lg-row frex-lg-wrap align-items-start">
                                <Div className={`order-2 order-lg-1 ${styles.Playlist}`}>
                                    <Accordion defaultActiveKey="0" className={styles.Accordion}>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <Div className="d-flex flex-col align-items-start gap-1">
                                                    <Span className={styles.Title}>Answer Videos</Span>
                                                    <Span className={styles.Complited}>1/2 completed</Span>
                                                </Div>
                                            </Accordion.Header>
                                            <Accordion.Body className="py-3">
                                                <If cond={videoAnswers}>
                                                    <ul className={styles.List}>
                                                        {videoAnswers.map((video, index) => (
                                                            <li
                                                                key={index}
                                                                className="py-3"
                                                                active={index == 0? "true" : ""}
                                                            >
                                                                <A no-decoration to={video.videoUrl}>
                                                                    {video.name}
                                                                </A>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </If>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Div>

                                <Div className={`order-1 order-lg-2 ${styles.VideoWrap}`}>
                                    <div className={styles.Video}>
                                        <VideoPlayer
                                            video={video.video}
                                            token={video.token}
                                            subtitles={video.subTitles}
                                            downloadWorkbookLink={""}
                                        />
                                    </div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}