import React, { useState, useEffect, useRef }from "react";
import { H1, A } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";
import Breadcrums from "../../../../components/breadcrums";
import styles from "./style.module.scss";
import If from "../../../../components/renderIf";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

export default function QAHead({item}) {
    const [filter, setFilter] = useState("");

    const handleChanges = (subject) => {
        if (subject) {
            setFilter(subject);
        }
    };

    const [activeCard, setActiveCard] = useState(0);
    const cardsRef = useRef();
  
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

    const HandleShowPrevCards = () => {
        let length = cardsRef.current.children.length;
        let newIndex = activeCard;

        if (activeCard == 0) {
            newIndex = length - 1;
        } else {
            newIndex--;
        }

        HandleActiveCards(newIndex);
    };

    const HandleShowNextCards = () => {
        let length = cardsRef.current.children.length;
        let newIndex = activeCard;

        if (activeCard == length - 1) {
            newIndex = 0;
        } else {
            newIndex++;
        }

        if (activeCard == length) {
            newIndex = 0;
        }

        HandleActiveCards(newIndex);
    };

    return (
        <>
            <Div className={styles.QAHead}>
                <Div className="page d-flex">
                    <Div className="flex-col pt-4 pb-1 pt-lg-5 pb-lg-5 align-items-start align-self-start">
                        <Div className={styles.Breadcrums}>
                            <Breadcrums>
                                <A to="/">Home</A>
                                <A to="/qa">Questions & Answers</A>
                            </Breadcrums>
                            <H1>{item.title}</H1>
                        </Div>
                        <Div className="d-none d-lg-flex flex-rows gap-1 gap-lg-2 align-items-start align-items-lg-center">
                            <Div className={styles.UserIcon}>
                                <img src={item.user_icon}/>
                            </Div>
                            <Div className={styles.UserName}>{item.user_name}</Div>
                            <Div className={`align-self-center ${styles.College}`}>{item.user_college}</Div>
                            <Div className={styles.Subject}>
                                <A onClick={(e) => handleChanges(item.subject)}>
                                    #{item.subject}
                                </A>
                            </Div>
                        </Div>
                    </Div>
                    <If cond={item.images}>
                        <Div className={`mx-1 mx-lg-5 pt-1 pb-2 pt-lg-5 pb-lg-5 d-flex flex-row flex-wrap`}>
                            <Div className={`d-flex justify-content-center align-items-center ${styles.Container}`}>
                                <A onClick={() => HandleShowPrevCards()} className={styles.Arrow}>
                                    <BsChevronLeft />
                                </A>
                                <Div className={`d-flex flex-row gap-5 align-self-center ${styles.ImagesWrraper}`} ref={cardsRef}>
                                    {item.images && item.images.map((imgItem, index) => (
                                        <Div key={index} className={styles.ImgSlide}>
                                            <img className={styles.Img} src={`https://www.proprep.com/${imgItem}`} />
                                        </Div>
                                    ))}
                                </Div>
                                <A onClick={() => HandleShowNextCards()} className={styles.Arrow}>
                                    <BsChevronRight />
                                </A>
                            </Div>
                            <Div className={styles.DotsScroll}>
                                {Array(item.images.length)
                                    .fill()
                                    .map((_, index) => (
                                        <Div
                                            key={index}
                                            active={String(activeCard === index)}
                                            onClick={() => HandleActiveCards(index)}>
                                        </Div>
                                ))}
                            </Div>
                        </Div>
                        <Div className="d-flex d-lg-none flex-rows flex-wrap gap-2 pb-4 mb-1 align-items-start justify-content-start">
                            <Div className={styles.UserIcon}>
                                <img src={item.user_icon}/>
                            </Div>
                            <Div className={styles.UserName}>{item.user_name}</Div>
                            <Div className={`align-self-center ${styles.College}`}>{item.user_college}</Div>
                            <Div className={styles.Subject}>
                                <A onClick={(e) => handleChanges(item.subject)}>
                                    #{item.subject}
                                </A>
                            </Div>
                        </Div>
                    </If>
                </Div>
            </Div>
        </>
    );
}