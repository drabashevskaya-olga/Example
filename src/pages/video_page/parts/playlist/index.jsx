import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Div } from "../../../../parts/general";
import { Span, A } from "../../../../parts/txt";
import Accordion from "react-bootstrap/Accordion";
import If from "../../../../components/renderIf";

export default function VidPlaylist(props) {
  const [data, setData] = useState([]);
  const [activeKey, setActiveKey] = useState(-1);

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  useEffect(() => {
    if (data.length) {
      setActiveKey(findActivePlaylist(data));
    }
  }, [data]);

  // function VideoList({ videos }) {
  //   return (

  //   );
  // }

  const findActivePlaylist = (data) => {
    return data.findIndex((playlist) =>
      playlist.chapterTopicVideos.find(
        (item) => item.videoUrl === props.active_link
      )
    );
  };

  return (
    <>
      <Accordion
        activeKey={activeKey}
        onSelect={setActiveKey}
        className={styles.Container}
      >
        {data.map((item, index) => (
          <Accordion.Item eventKey={index} key={index} data-index={index}>
            <Accordion.Header>
              <Div className={styles.ItemHead}>
                <Span>{item.name}</Span>
                <Span
                  className={
                    item.numOfCompletedVideos === item.chapterTopicVideos.length
                      ? "text-primary fw-medium"
                      : ""
                  }
                >
                  {item.numOfCompletedVideos}/{item.chapterTopicVideos.length}{" "}
                  completed
                </Span>
              </Div>
            </Accordion.Header>
            <Accordion.Body className="py-3">
              <If cond={item.chapterTopicVideos}>
                <ul className={styles.VideoList}>
                  {item.chapterTopicVideos.map((video, index) => (
                    <li
                      key={index}
                      className="py-3"
                      active={String(video.isViewed)}
                      data-viewing={String(
                        props.active_link === video.videoUrl
                      )}
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
        ))}
      </Accordion>
    </>
  );
}
