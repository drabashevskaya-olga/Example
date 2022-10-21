import React from "react";
import styles from "./style.module.scss";
import { A } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";
import If from "../../../../components/renderIf";
import Logo from "../../../../assets/images/logo.svg";
import LogoLine from "../../../../assets/Icons/Icons/logoLine";
import { useParams, useLocation } from "react-router-dom";

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

export default function PartnerHeader() {
  const location = useLocation();

  const Partners = [
    {
      name: "Imperial",
      img: Imperial,
    },
    {
      name: "Oxford",
      img: Oxford,
    },
    {
      name: "KCL",
      img: KCL,
    },
    {
      name: "Totum",
      img: Totum,
    },
    {
      name: "Exeter",
      img: Exeter,
    },
    {
      name: "Manchester",
      img: Manchester,
    },
    {
      name: "Studentbeans",
      img: Studentbeans,
    },
    {
      name: "LSESU",
      img: LSESU,
    },
    {
      name: "Cardiff",
      img: Cardiff,
    },
    {
      name: "Swansea",
      img: Swansea,
    },
    {
      name: "USSU",
      img: USSU,
    },
    {
      name: "Kent",
      img: Kent,
    },
    {
      name: "Bristol",
      img: Bristol,
    },
    {
      name: "Demontfort",
      img: Demontfort,
    },
    {
      name: "QMUL",
      img: QMSU,
    },
  ];

  const getPartnersLogo = () => {
    const queryParams = new URLSearchParams(location.search);
    const term = queryParams.get("logo");

    if (term) {
      const partnerLogo = Partners.find((element) => element.name === term);
      return partnerLogo.img;
    }

    return Partners[0].img;
  };

  return (
    <>
      <Div className={styles.Container}>
        <Div className="d-flex justify-content-center align-items-center">
          <Div>
            <A to="/">
              <img className={styles.Logo} src={Logo} alt="proprep logo svg" />
            </A>
          </Div>
          <If cond={getPartnersLogo()}>
            <Div className="p-3">
              <LogoLine />
            </Div>
            <Div>
              <A to="/" className={styles.CollegeLogo}>
                <img src={getPartnersLogo()} alt="proprep link to college" />
              </A>
            </Div>
          </If>
        </Div>
      </Div>
    </>
  );
}
