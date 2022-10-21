import React from "react";
import { H2, A } from "../../../../parts/txt";
import styles from "./style.module.scss";
import If from "../../../../components/renderIf";

import Imperial from "../../../../assets/partner/logos/Imperial.png";
import Oxford from "../../../../assets/partner/logos/OxfordSU.png";
import KCL from "../../../../assets/partner/logos/KCL.jpg";
import Totum from "../../../../assets/partner/logos/Totum.png";
import Exeter from "../../../../assets/partner/logos/Exeter.png";
import Manchester from "../../../../assets/partner/logos/Manchester.jpg";
import Studentbeans from "../../../../assets/partner/logos/StudentBeans.png";
import LSESU from "../../../../assets/partner/logos/LSESU.png";
import Cardiff from "../../../../assets/partner/logos/Cardiff.jpg";
import Swansea from "../../../../assets/partner/logos/Swansea.png";
import USSU from "../../../../assets/partner/logos/USSU.png";
import Kent from "../../../../assets/partner/logos/Kent.png";
import Bristol from "../../../../assets/partner/logos/Bristol.png";
import Demontfort from "../../../../assets/partner/logos/Demontfort.png";
import QMSU from "../../../../assets/partner/logos/QMSU.png";

export default function OurPartners() {
  const Partners = [
    {
      name: "Imperial students",
      img: Imperial,
      url: "utm_campaign=imperial&academyId=22054&logo=Imperial",
    },
    {
      name: "Oxford students",
      img: Oxford,
      url: "utm_campaign=oxford&academyId=22101&logo=Oxford",
    },
    {
      name: "Kcl",
      img: KCL,
      url: "utm_campaign=kcl&academyId=22076&logo=KCL",
    },
    {
      name: "Totum",
      img: Totum,
      url: "utm_campaign=totum&logo=Totum",
    },
    {
      name: "Exeter student guild",
      img: Exeter,
      url: "utm_campaign=exeter&academyId=22042&logo=Exeter",
    },
    {
      name: "Exeter student guild",
      img: Manchester,
      url: "utm_campaign=manchester&academyId=21966&logo=Manchester",
    },
    {
      name: "Studentbeans",
      img: Studentbeans,
      url: "utm_campaign=Studenbeans&logo=Studentbeans",
    },
    {
      name: "LSESU",
      img: LSESU,
      url: "utm_campaign=LSESU&logo=LSESU",
    },
    {
      name: "CardiffMetSU",
      img: Cardiff,
      url: "utm_campaign=Cardiff&academyId=22024&logo=Cardiff",
    },
    {
      name: "Swansea",
      img: Swansea,
      url: "utm_campaign=swansea&academyId=22129&logo=Swansea",
    },
    {
      name: "USSU",
      img: USSU,
      url: "utm_campaign=surrey&academyId=22127&logo=USSU",
    },
    {
      name: "Kentunion",
      img: Kent,
      url: "utm_campaign=kent&academyId=20312&logo=Kent",
    },
    {
      name: "Bristolunion",
      img: Bristol,
      url: "utm_campaign=bristol&academyId=22017&logo=Bristol",
    },
    {
      name: "De montfort",
      img: Demontfort,
      url: "utm_campaign=demonfort&academyId=22031&logo=Demontfort",
    },
    {
      name: "QMUL",
      img: QMSU,
      url: "utm_campaign=QueenMary&academyId=22080&logo=QMUL",
    },
  ];

  return (
    <div className="page py-4">
      <H2 className="text-center bg-white fs-xl">Our Partners</H2>
      <div className={styles.Imgs}>
        {Partners.map((partner, index) => (
          <React.Fragment key={index}>
            <If cond={partner.url}>
              <A to={`/partner?${partner.url}`} className={styles.Img}>
                <img src={partner.img} alt={partner.name} />
              </A>
            </If>
            <If cond={!partner.url}>
              <div className={styles.Img}>
                <img src={partner.img} alt={partner.name} />
              </div>
            </If>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
