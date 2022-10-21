import React, { useState } from "react";
import * as Txt from "../../../../parts/txt";
import { Outlined } from "../../../../parts/button";
import { Div } from "../../../../parts/general";
import styles from "./style.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { write } from "../../../../API/useful_functions";
import { UserCtx } from "../../../../Ctx/User";
import If from "../../../../components/renderIf";

export default function VidUpNext({ data }) {
  const { useDevice } = React.useContext(UserCtx);
  const device = useDevice();

  return (
    <div className="py-4">
      <Txt.H2>Up Next</Txt.H2>
      <Txt.A no-decoration to={data.videoUrl}>
        <Div className={styles.card}>
          <Div className={styles.card__thumbnail}>
            <div className={styles.card__thumbnail__img}>
              <img
                src={write(data.videoImage, { shift: "https://proprep.com" })}
                alt="No Image"
              />
            </div>

            <Div className={styles.card__thumbnail__details}>
              <Txt.B>{data.name}</Txt.B>
              <Txt.Span>{data.durationString}</Txt.Span>
            </Div>
          </Div>
          <Outlined>
            <If cond={device !== "mobile"}>Watch Next</If>
            <IoIosArrowForward />
          </Outlined>
        </Div>
      </Txt.A>
    </div>
  );
}
