import React from "react";
import StartLearningCard from "../../../../components/start_learning_card";
import styles from "./style.module.scss";
import { H1, P } from "../../../../parts/txt";
import { useQuery } from "react-query";
import { APIgetGeneralCourses } from "../../../../API/all/general";
import colorMap from "../../../../components/color_map";

const Cards = [
  {
    children: "College Algebra",
    colorMap: colorMap["math"],
  },
  {
    children: "Linear Algebra",
    colorMap: colorMap["algebra"],
  },
  {
    children: "Calculus I",
    colorMap: colorMap["calculus"],
  },
  {
    children: "Calculus II",
    colorMap: colorMap["calculus"],
  },
  {
    children: "Calculus III",
    colorMap: colorMap["calculus"],
  },
  {
    children: "Complex Analysis",
    colorMap: colorMap["analysis"],
  },
  {
    children: "Ordinary Differential Equations",
    colorMap: colorMap["differential"],
  },
  {
    children: "Partial Differential Equations",
    colorMap: colorMap["differential"],
  },
  {
    children: "Probability",
    colorMap: colorMap["probability"],
  },
  {
    children: "Statistics",
    colorMap: colorMap["statistics"],
  },
  {
    children: "Statistics Arabic",
    colorMap: colorMap["statistics"],
  },
  {
    children: "Physics 1 Mechanics Waves and Thermodynamics",
    colorMap: colorMap["physics"],
  },
  {
    children: "Physics 2 Electricity and Magnetism",
    colorMap: colorMap["physics"],
  },
  {
    children: "Physics Arabic Introduction",
    colorMap: colorMap["physics"],
  },
  {
    children: "General Chemistry",
    colorMap: colorMap["generalChemistry"],
  },
  {
    children: "Organic Chemistry Arabic",
    colorMap: colorMap["generalChemistry"],
  },
  {
    children: "General Chemistry Spanish",
    colorMap: colorMap["generalChemistry"],
  },
  {
    children: "Organic Chemistry",
    colorMap: colorMap["organicChemistry"],
  },
  {
    children: "Organic Chemistry Arabic",
    colorMap: colorMap["organicChemistry"],
  },
  {
    children: "Introduction to Biology",
    colorMap: colorMap["biology"],
  },
  {
    children: "Biochemistry",
    colorMap: colorMap["biochemistry"],
  },
  {
    children: "Principles of Programing",
    colorMap: colorMap["programing"],
  },
  {
    children: "Introduction to Financial Accounting and Reporting",
    colorMap: colorMap["accounting"],
  },
  {
    children: "Learn Parametric CAD and CAM Design with Fusion 360",
    colorMap: colorMap["digital"],
  },
];

export default function StartLearning() {
  const cards = useQuery("GeneralCourses", APIgetGeneralCourses);

  const getCardData = (name) => {
    if (!cards.isLoading) {
      return cards.data?.find((element) => element.name === name) || "";
    }
    return "";
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Headline}>
        <H1>Start Learning</H1>
        <P>
          Browse by subject area for access to our full range of study materials
        </P>
      </div>
      <div className={styles.Wrraper}>
        <div className={styles.Cards}>
          {Cards.map((card, index) => (
            <StartLearningCard
              key={index}
              {...getCardData(card.children)}
              color={card.colorMap.color}
              svg={card.colorMap.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
