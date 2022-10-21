import React from "react";
import { LocaleCtx } from "../../Ctx/Locale";
import { UserCtx } from "../../Ctx/User";
import styles from "./style.module.scss";
import Logo from "../../assets/images/logo.svg";
import * as Txt from "../../parts/txt";
import { Div } from "../../parts/general";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiInstagramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { useQuery } from "react-query";
import { APIgetPopularModules } from "../../API/all/general";
import usaPng from "../../assets/flags/usa.png";
import ukPng from "../../assets/flags/uk.png";
import If from "../renderIf";

export default function Footer() {
  const { setLanguage, language } = React.useContext(LocaleCtx);
  const { user } = React.useContext(UserCtx);

  const PopularModules = useQuery("PopularModules", APIgetPopularModules);

  const handleSetLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Row}>
        <div className={styles.Col}>
          <Txt.A to="/">
            <img src={Logo} alt="proprep logo svg" />
          </Txt.A>
          <If cond={user.type === "guest"}>
            <Div className={styles.Languages}>
              <button
                onClick={() => handleSetLanguage("en-uk")}
                className={language === "en-uk" ? styles.active : ""}
              >
                <img src={ukPng} alt="uk flag proprep" />
                United Kingdom
              </button>
              <button
                onClick={() => handleSetLanguage("en-us")}
                className={language === "en-us" ? styles.active : ""}
              >
                <img src={usaPng} alt="us flag proprep" />
                United States
              </button>
            </Div>
          </If>
        </div>
        <div className={styles.Col}>
          <Txt.B>General Courses</Txt.B>
          {PopularModules.data?.map((module, index) => (
            <Txt.A key={index} to={module.link}>
              {module.name}
            </Txt.A>
          ))}
        </div>
        <div className={styles.Col}>
          <Txt.B>Company</Txt.B>
          {CompanyLinks.map((item, index) => (
            <Txt.A key={index} href={item.href} to={item.to}>
              {item.text}
            </Txt.A>
          ))}
        </div>
        <div className={styles.Col}>
          <Txt.B>Contact us</Txt.B>
          {ContactUsLinks.map((item, index) => (
            <Txt.A key={index} to={item.link}>
              {item.text}
            </Txt.A>
          ))}
        </div>
        <div className={styles.Col}>
          <div>
            <Txt.B>Social</Txt.B>
          </div>
          <div className={styles.Socials}>
            {Socials.map((item, index) => (
              <Txt.A
                key={index}
                target="_blank"
                href={item.link}
                className={styles.IconBtn}
              >
                {item.icon}
              </Txt.A>
            ))}
          </div>
        </div>
      </div>
      <Div block>
        <hr />
      </Div>
      <div className={`${styles.Row} justify-content-between fs-sm`}>
        <div className={styles.BottomFooterLinks}>
          {FooterBottomLeftLinks.map((item, index) => (
            <Txt.A key={index} to={item.link} disabled>
              {item.text}
            </Txt.A>
          ))}
        </div>
        <Txt.A disabled>Proprep is not endorsed by any college or school</Txt.A>
      </div>
    </div>
  );
}

const GeneralCoursesLinks = [
  {
    text: "College Algebra",
    link: "#",
  },
  {
    text: "Linear Algebra",
    link: "#",
  },
  {
    text: "Calculus I",
    link: "#",
  },
  {
    text: "Calculus II",
    link: "#",
  },
  {
    text: "Calculus III",
    link: "#",
  },
  {
    text: "Complex analysis",
    link: "#",
  },
];

const CompanyLinks = [
  {
    text: "Careers",
    to: "/careers",
  },
  {
    text: "About Us",
    to: "/about-us",
  },
  {
    text: "FAQ",
    to: "/faq",
  },
  {
    text: "Contact Us",
    to: "/contact-us",
  },
  {
    text: "Pricing",
    to: "/pricing",
  },
  {
    text: "Blog",
    href: "https://blog.proprep.uk/",
  },
  {
    text: "Press room",
    to: "/press-room",
  },
  {
    text: "Questions & Answers",
    to: "/qa",
  },
];

const ContactUsLinks = [
  {
    text: (
      <>
        Call Us: <Txt.Span className="text-primary">1-818-273-1725</Txt.Span>
      </>
    ),
  },
  {
    text: (
      <>
        Email Us: <Txt.Span className="text-primary">info@proprep.com</Txt.Span>
      </>
    ),
  },
];

const Socials = [
  {
    icon: <RiFacebookFill />,
    link: "https://www.facebook.com/proprepeducation",
  },
  {
    icon: <RiTwitterFill />,
    link: "https://twitter.com/proprepme",
  },
  {
    icon: <RiLinkedinFill />,
    link: "https://www.linkedin.com/company/proprep",
  },
  {
    icon: <RiYoutubeFill />,
    link: "https://www.youtube.com/channel/UC6b97VASQZdQcrnKwghzepA",
  },
  {
    icon: <RiInstagramLine />,
    link: "https://www.instagram.com/proprepeducation/",
  },
  {
    icon: <RiWhatsappLine />,
    link: "https://chat.whatsapp.com/LeJjAKxgVo6EXYqI6kIlOA",
  },
];

const FooterBottomLeftLinks = [
  {
    text: "© 2022 Proprep. All rights reserved.",
    link: "/",
  },
  {
    text: "Terms of Service",
    link: "/terms-of-service",
  },
  {
    text: "Cookies Policy",
    link: "cookies-policy",
  },
  {
    text: "Privacy Notice",
    link: "/privacy-notice",
  },
];
