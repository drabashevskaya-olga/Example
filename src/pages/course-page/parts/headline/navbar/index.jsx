import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import {
  scrollToElement,
  getActiveElement,
} from "../../../../../parts/functions";
import { A } from "../../../../../parts/txt";
import { Div } from "../../../../../parts/general";

export default function CpNavbar(props) {
  const [links, setLinks] = useState({
    "#syllabus": {
      title: "Syllabus",
      isActive: true,
    },
    "#about": {
      title: "About",
    },
    "#lecturers": {
      title: "Lecturers",
    },
    "#reviews": {
      title: "Reviews",
    },
    "#related": {
      title: "Related",
    },
    "#faq": {
      title: "FAQ",
    },
  });

  const handleNavbar = () => {
    const [active] = getActiveElement(Object.keys(links));

    if (!active) return;

    let newLinks = { ...links };

    for (const key of Object.keys(newLinks)) {
      newLinks[key].isActive = key === active;
    }

    setLinks(newLinks);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
  }, []);

  return (
    <Div {...props} className={`${styles.Navbar} ${props.className || ""}`}>
      <nav>
        {Object.keys(links).map((key, index) => (
          <A
            key={index}
            no-decoration
            active={String(links[key].isActive)}
            onClick={() => scrollToElement(key, links[key].offset ?? 150)}
          >
            {links[key].title}
          </A>
        ))}
      </nav>
    </Div>
  );
}
