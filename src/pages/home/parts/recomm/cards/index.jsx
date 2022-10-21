import { Div } from "../../../../../parts/general";
import * as Txt from "../../../../../parts/txt";
import { AiFillStar } from "react-icons/ai";
import styles from "./style.module.scss";
import React, { useState, useRef } from "react";
import firstImg from "../../../../../assets/Recomm/first.jpg";
import secondImg from "../../../../../assets/Recomm/Rahul.jpg";
import thirdImg from "../../../../../assets/Recomm/Marc.jpg";
import forthImg from "../../../../../assets/Recomm/jason.jpg";
import fifthImg from "../../../../../assets/Recomm/daniel.jpg";
import { useEffect } from "react";

const json = [
  {
    url: firstImg,
    name: "Sophia Valencia",
    uni: "University of California, Los Angeles",
    rating: 5,
    message:
      "I love Proprep! They really want to help you learn. The courses are explained very well, so you know you're in good hands!",
  },
  {
    url: secondImg,
    name: "Rahul Debnath",
    uni: "City college cuny",
    rating: 5,
    message:
      "One of the most useful and effective study materials I've ever used ... It's easy to navigate and contains a huge amount of material and resources.",
  },
  {
    url: thirdImg,
    name: "Marc Nechmad",
    uni: "Rutgers University",
    rating: 5,
    message:
      "Proprep is a must-have study tool. Totally recommend it to anyone who needs a little extra help outside of class!",
  },
  {
    url: forthImg,
    name: " Jason Blatt",
    uni: "Rutgers University",
    rating: 3,
    message:
      "Amazingly useful study tool, highly recommended to all college students.",
  },
  {
    url: fifthImg,
    name: "Daniel Podelko",
    uni: "University of California Davis",
    rating: 5,
    message:
      "The personalized videos help explain what lectures miss, and the practice problems really helped me study for my exams!",
  },
];

export default function RecommCards(props) {
  const [activeCard, setActiveCard] = useState(0);
  const cardsRef = useRef();
  const isDragging = useRef(false);
  const dragLastX = useRef(0);

  const HandleActiveCards = (index) => {
    setActiveCard(index);
    scrollTo(index);
  };

  const scrollTo = (index) => {
    cardsRef.current.scrollTo({
      left: index * (cardsRef.current.children[0].clientWidth + 40),
      behavior: "smooth",
    });
  };

  // on menual scroll, update the active card (for the dots)
  useEffect(() => {
    cardsRef.current.addEventListener("scroll", handleScroll);
  }, [cardsRef.current]);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.children[0]?.clientWidth;
    let index = 1;

    while (scrollLeft > index * (width + 20)) {
      index++;
    }

    setActiveCard(index - 1);
  };

  return (
    <div className={styles.Container}>
      <div
        className={styles.CardsWrraper}
        data-snap={String(!props.noScrollSnap)}
        ref={cardsRef}
      >
        {json.map((item, index) => (
          <Div
            key={index}
            className={`${styles.Card} ${props.small ? styles.Small : ""}`}
          >
            <img
              src={item.url}
              alt="proprep university"
              className="rounded-circle"
            />
            <div className={styles.Card__name}>
              <Txt.H3>{item.name}</Txt.H3>
              <Txt.Gray className="fs-sm fw-bold text-uppercase">
                {item.uni}
              </Txt.Gray>
            </div>
            <div className={styles.Rating}>
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <AiFillStar key={i} />
                ))}
            </div>
            <Txt.P>"{item.message}"</Txt.P>
          </Div>
        ))}
      </div>
      <br />
      <br />
      <div className={styles.DotsScroll}>
        {Array(json.length)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              active={String(activeCard === index)}
              onClick={() => HandleActiveCards(index)}
            ></div>
          ))}
      </div>
    </div>
  );
}
