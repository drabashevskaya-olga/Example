import React, { useState } from "react";
import { Div } from "../../../../parts/general";
import { H2, H3, Span } from "../../../../parts/txt";
import { Outlined } from "../../../../parts/button";
import styles from "./style.module.scss";

import RobWeeks from "../../../../assets/about_us/team/Rob-Weeks.png";
import KateRyan from "../../../../assets/about_us/team/Kate-Ryan.png";
import KatharineJackson from "../../../../assets/about_us/team/Katharine-Jackson.png";
import SimonBell from "../../../../assets/about_us/team/Simon-Bell.png";
import KatherineMeyhew from "../../../../assets/about_us/team/Katherine-Mayhew.png";
import OfficeFullTeam from "../../../../assets/about_us/team/Office-Full-Team.png";
import ProfGiladLivne from "../../../../assets/about_us/team/Prof-Gilad-Livne.png";
import DrNikitaHari from "../../../../assets/about_us/team/Dr-Nikita-Hari.png";
import DrTomCrawford from "../../../../assets/about_us/team/Dr-Tom-Crawford.png";
import AmosBahiri from "../../../../assets/about_us/team/Amos-Bahiri.png";
import DrShayBarkan from "../../../../assets/about_us/team/Dr-Shay-Barkan.png";
import DrYishaiWeizmann from "../../../../assets/about_us/team/Dr-Yishai-Weizmann.png";
import DrDonKatcoff from "../../../../assets/about_us/team/Dr-Don-Katcoff.png";
import ProfArleneGordon from "../../../../assets/about_us/team/Prof-Arlene-Gordon.png";
import DrMichalEjgenberg from "../../../../assets/about_us/team/Dr-Michal-Ejgenberg.png";
import DrNivaLevy from "../../../../assets/about_us/team/Dr-Niva-Levy.png";
import DrHenniZommer from "../../../../assets/about_us/team/Dr-Henni-Zommer.png";
import MrDavidKolitz from "../../../../assets/about_us/team/Mr-David-Kolitz.png";
import NoPicture from "../../../../assets/about_us/team/No-picture.png";
import ProfFrancescaFranco from "../../../../assets/about_us/team/Prof-Francesca-Franco.png";
import ProfEliAmir from "../../../../assets/about_us/team/Prof-Eli-Amir.png";
import MrMarcoGhitti from "../../../../assets/about_us/team/Mr-Marco-Ghitti.png";
import MrHardipMothada from "../../../../assets/about_us/team/Mr-Hardip-Mothada.png";
import MrShayYederman from "../../../../assets/about_us/team/Mr-Shay-Yederman.png";
import MrSharifAbuGosh from "../../../../assets/about_us/team/Mr-Sharif-Abu-Gosh.png";
import DrAbedAzab from "../../../../assets/about_us/team/Dr-Abed-Azab.png";
import MsMagaliSaul from "../../../../assets/about_us/team/Ms-Magali-Saul.png";
import DrHijaziAbuAli from "../../../../assets/about_us/team/Dr-Hijazi-Abu-Ali.png";
import MrAbhijithMoni from "../../../../assets/about_us/team/Mr-Abhijith-Moni.png";
import MrMenyGabay from "../../../../assets/about_us/team/Mr-Meny-Gabay.png";
import DrBarakKandell from "../../../../assets/about_us/team/Dr-Barak-Kandell.png";
import MrKevinMcMeeking from "../../../../assets/about_us/team/Mr-Kevin-McMeeking.png";
import DrYaelAvraham from "../../../../assets/about_us/team/Dr-Yael-Avraham.png";
import MrJamalKnought from "../../../../assets/about_us/team/Mr-Jamal-Knought.png";
import MrDanielDgani from "../../../../assets/about_us/team/Mr-Daniel-Dgani.png";
import MsDoriaSpiegel from "../../../../assets/about_us/team/Ms-Doria-Spiegel.png";
import MrGuySalomon from "../../../../assets/about_us/team/Mr-Guy-Salomon.png";
import ProfYitzhakMastai from "../../../../assets/about_us/team/Prof-Yitzhak-Mastai.png";
import MsLoriRubel from "../../../../assets/about_us/team/Ms-Lori-Rubel.png";

import DrRachelPersky from "../../../../assets/about_us/team/Dr-Rachel-Persky.png";
import MrStavBerman from "../../../../assets/about_us/team/Mr-Stav-Berman.png";
import MrYitzhakTzubara from "../../../../assets/about_us/team/Mr-Yitzhak-Tzubara.png";

import BlueArrowDown from "../../../../assets/Icons/Icons/blueArrowDown";
import If from "../../../../components/renderIf";

export default function OurTeam() {
  const [showMore, setShowMore] = useState(false);

  const handleShowmoreBtn = ({ target }) => {
    if (showMore) {
      setShowMore(false);

      // a better practice would be to use a ref to the element, and invoke the scrollIntoView method using the useEffect hook
      setTimeout(() => target.scrollIntoView({ block: "center" }), 10);
    } else {
      setShowMore(true);
    }
  };

  return (
    <Div className="page text-center py-5">
      <H2 className="fs-xl">Meet our team</H2>

      <Div className={styles.Container}>
        <div className={styles.Profile}>
          <img src={RobWeeks} alt="rob weeks" />
          <H3>Rob Weeks</H3>
          <Span>Director of Licensing</Span>
        </div>
        <div className={styles.Profile}>
          <img src={KateRyan} alt="kate ryan" />
          <H3>Kate Ryan</H3>
          <Span>Director of Business Development</Span>
        </div>
        <div className={styles.Profile}>
          <img src={KatharineJackson} alt="Katharine Jackson" />
          <H3>Katharine Jackson</H3>
          <Span>Chief Executive Officer</Span>
        </div>
        <div className={styles.Profile}>
          <img src={SimonBell} alt="Simon Bell" />
          <H3>Simon Bell</H3>
          <Span>Director of Partnerships & Engagement</Span>
        </div>
        <div className={styles.Profile}>
          <img src={KatherineMeyhew} alt="Katherine Mayhew" />
          <H3>Katherine Mayhe</H3>
          <Span>Student Engagement & Outreach Manager</Span>
        </div>
      </Div>

      <div className="mb-5">
        <img className="w-100" src={OfficeFullTeam} alt="Office-Full-Team" />
      </div>

      <H2 className="fs-xl pt-5">Pedagocial advisory board</H2>

      <Div className={styles.Container}>
        <div className={styles.Profile}>
          <img src={ProfGiladLivne} alt="Prof-Gilad-Livne" />
          <H3>Prof. Gilad Livne</H3>
          <Span>Accounting</Span>
        </div>
        <div className={styles.Profile}>
          <img src={DrNikitaHari} alt="Dr-Nikita-Hari" />
          <H3>Dr. Nikita Hari</H3>
          <Span>Electrical Engineering</Span>
        </div>
        <div className={styles.Profile}>
          <img src={DrTomCrawford} alt="Dr-Tom-Crawford" />
          <H3>Dr. Tom Crawford</H3>
          <Span>Math</Span>
        </div>
      </Div>

      <H2 className="fs-xl pt-5">The pedagogical team</H2>

      <Div className={styles.Container}>
        <div key="1" className={styles.Profile}>
          <img className={styles.imgSmall} src={AmosBahiri} alt="Amos-Bahiri" />
          <H3>Amos Bahiri</H3>
          <Span>Math</Span>
        </div>
        <div className={styles.Profile}>
          <img
            className={styles.imgSmall}
            src={DrShayBarkan}
            alt="Dr-Shay-Barkan"
          />
          <H3>Dr. Shay Barkan</H3>
          <Span>Biology</Span>
        </div>
        <div className={styles.Profile}>
          <img
            className={styles.imgSmall}
            src={DrYishaiWeizmann}
            alt="Dr-Yishai-Weizmann"
          />
          <H3>Dr. Yishai Weizmann</H3>
          <Span>Biology</Span>
        </div>
        <div className={styles.Profile}>
          <img
            className={styles.imgSmall}
            src={DrDonKatcoff}
            alt="Dr-Don-Katcoff"
          />
          <H3>Dr. Don Katcoff</H3>
          <Span>Biology</Span>
        </div>
        <div className={styles.Profile}>
          <img
            className={styles.imgSmall}
            src={ProfArleneGordon}
            alt="Prof-Arlene-Gordon"
          />
          <H3>Prof. Arlene Gordon</H3>
          <Span>Chemistry</Span>
        </div>
        <div className={styles.Profile}>
          <img
            className={styles.imgSmall}
            src={DrMichalEjgenberg}
            alt="Dr-Michal-Ejgenberg"
          />
          <H3>Dr. Michal Ejgenberg</H3>
          <Span>Chemistry</Span>
        </div>

        <If cond={showMore}>
          <>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={DrNivaLevy}
                alt="Dr-Niva-Levy"
              />
              <H3>Dr. Niva Levy</H3>
              <Span>Chemistry</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={DrHenniZommer}
                alt="Dr-Henni-Zommer"
              />
              <H3>Dr. Henni Zommer</H3>
              <Span>Biochemistry</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrDavidKolitz}
                alt="Mr-David-Kolitz"
              />
              <H3>Mr. David Kolitz</H3>
              <Span>Accounting</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={NoPicture}
                alt="Ms-Cathy-Service"
              />
              <H3>Ms. Cathy Service</H3>
              <Span>Accounting</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={ProfFrancescaFranco}
                alt="Prof-Francesca-Franco"
              />
              <H3>Prof. Francesca Franco</H3>
              <Span>Accounting</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={ProfEliAmir}
                alt="Prof-Eli-Amir"
              />
              <H3>Prof. Eli Amir</H3>
              <Span>Finance</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrMarcoGhitti}
                alt="Mr-Marco-Ghitti"
              />
              <H3>Mr. Marco Ghitti</H3>
              <Span>Finance</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrHardipMothada}
                alt="Mr-Hardip-Mothada"
              />
              <H3>Mr. Hardip Mothada</H3>
              <Span>Computer Science</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrShayYederman}
                alt="Mr-Shay-Yederman"
              />
              <H3>Mr. Shay Yederman</H3>
              <Span>Physics / Electrical Engineering</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrSharifAbuGosh}
                alt="Mr-Sharif-Abu-Gosh"
              />
              <H3>Mr. Sharif Abu Gosh</H3>
              <Span>Statistics</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={DrAbedAzab}
                alt="Dr-Abed-Azab"
              />
              <H3>Dr. Abed Azab</H3>
              <Span>Chemistry</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MsMagaliSaul}
                alt="Ms-Magali-Saul"
              />
              <H3>Ms. Magali Saul</H3>
              <Span>Chemistry</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={DrHijaziAbuAli}
                alt="Dr-Hijazi-Abu-Ali"
              />
              <H3>Dr. Hijazi Abu Ali</H3>
              <Span>Chemistry</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrAbhijithMoni}
                alt="Mr-Abhijith-Moni"
              />
              <H3>Mr. Abhijith Moni</H3>
              <Span>Physics</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrMenyGabay}
                alt="Mr-Meny-Gabay"
              />
              <H3>Mr. Meny Gabay</H3>
              <Span>Physics</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={DrBarakKandell}
                alt="Dr-Barak-Kandell"
              />
              <H3>Dr. Barak Kandell</H3>
              <Span>Statistics</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrKevinMcMeeking}
                alt="Mr-Kevin-McMeeking"
              />
              <H3>Mr. Kevin McMeeking</H3>
              <Span>Accounting</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={DrYaelAvraham}
                alt="Dr-Yael-Avraham"
              />
              <H3>Dr. Yael Avraham</H3>
              <Span>Chemistry</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrJamalKnought}
                alt="Mr-Jamal-Knought"
              />
              <H3>Mr. Jamal Knought</H3>
              <Span>Math</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrDanielDgani}
                alt="Mr-Daniel-Dgani"
              />
              <H3>Mr. Daniel Dgani</H3>
              <Span>Physics</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MsDoriaSpiegel}
                alt="Ms-Doria-Spiegel"
              />
              <H3>Ms. Doria Spiegel</H3>
              <Span>Physics</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrGuySalomon}
                alt="Mr-Guy-Salomon"
              />
              <H3>Mr. Guy Salomon</H3>
              <Span>Math</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={ProfYitzhakMastai}
                alt="Prof-Yitzhak-Mastai"
              />
              <H3>Mr. Kevin McMeeking</H3>
              <Span>Accounting</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MsLoriRubel}
                alt="Ms-Lori-Rubel"
              />
              <H3>Ms. Lori Rubel</H3>
              <Span>Statistics</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={NoPicture}
                alt="Guy Rotman"
              />
              <H3>Mr. Guy Rotman</H3>
              <Span>Math</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={DrRachelPersky}
                alt="Dr-Rachel-Persky"
              />
              <H3>Dr. Rachel Persky</H3>
              <Span>Chemistry</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrStavBerman}
                alt="Mr-Stav-Berman"
              />
              <H3>Mr. Stav Berman</H3>
              <Span>Math</Span>
            </div>
            <div className={styles.Profile}>
              <img
                className={styles.imgSmall}
                src={MrYitzhakTzubara}
                alt="Mr-Yitzhak-Tzubara"
              />
              <H3>Mr. Yitzhak Tzubara</H3>
              <Span>Math</Span>
            </div>
          </>
        </If>
      </Div>

      <Outlined
        className={`mx-auto px-5 py-2 ${styles.Button}`}
        onClick={handleShowmoreBtn}
        data-expand={showMore}
      >
        <If cond={showMore}>Show Less</If>
        <If cond={!showMore}>Show More</If>
        <BlueArrowDown />
      </Outlined>
    </Div>
  );
}
