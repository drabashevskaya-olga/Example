import React, { useEffect, useRef } from "react";
import { Div } from "../../../../parts/general";
import { H3, Gray, A, Span } from "../../../../parts/txt";
import styles from "./style.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { BsFillTriangleFill } from "react-icons/bs";
import ProgressBar from "../../../../components/progressbar";
import { write } from "../../../../API/useful_functions";
import If from "../../../../components/renderIf";

export function CsItemHead(props) {
  const { open, name, progress, time, userHasCourse, downloadLink } = props;
  const headRef = useRef(null);

  useEffect(() => {
    if (open) {
      headRef.current?.click();
    }
  }, [open]);

  return (
    <div ref={headRef}>
      <Div className="flex justify-content-between">
        <H3>{name}</H3>
        <Div className="flex gap-3">
          <If cond={userHasCourse}>
            <A
              className="flex fw-medium block-click"
              href={write(downloadLink, { shift: "https://proprep.com/" })}
            >
              <HiDownload /> Workbook
            </A>
          </If>
          <Div className="fs-ml text-primary">
            <MdKeyboardArrowDown />
          </Div>
        </Div>
      </Div>
      <Div className="flex gap-2 justify-content-start fs-sm">
        <Gray>{time}</Gray>
        <If cond={userHasCourse}>
          <ProgressBar
            value={write(progress, {
              max: 1,
              maxAfter: ".",
              pop: "%",
            })}
            width="20%"
          />
          <Gray>
            {write(progress, {
              max: 1,
              maxAfter: ".",
              pop: "% completed",
            })}
          </Gray>
        </If>
      </Div>
    </div>
  );
}

export function CsItemBody(props) {
  const { items, userHasCourse } = props;

  if (items === null || items.length === 0) {
    return <>No chapters</>;
  }
  return (
    <Div className={styles.Body}>
      {items.map((item, index) => (
        <Div key={index}>
          <A className={styles.body__item} to={item.link} no-decoration>
            <Div className={styles.thumbnail}>
              <img
                src={`https://www.proprep.com/${item.videoImg}`}
                width={"100%"}
                className={"boredr rounded"}
                alt={"topic"}
              />
              <Div className={styles.btn}>
                <BsFillTriangleFill />
              </Div>
            </Div>
            <Div className={styles.Content}>
              <Div className={styles.Content__head}>
                <H3>{write(item.name)}</H3>
                <Span>
                  {write(item.videosCount)} videos - {write(item.sumHours)}
                </Span>
              </Div>
              <If cond={userHasCourse}>
                <Div className={styles.ProgressBar}>
                  <Span>
                    {write(item.percentCompleted, {
                      maxAfter: ".",
                      max: 1,
                      pop: "% completed",
                    })}
                  </Span>
                  <ProgressBar
                    value={write(item.percentCompleted, {
                      maxAfter: ".",
                      max: 1,
                      pop: "%",
                    })}
                  />
                </Div>
              </If>
            </Div>
          </A>
        </Div>
      ))}
    </Div>
  );
}
