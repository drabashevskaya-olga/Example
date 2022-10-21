import React from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.scss";
import MainHead from "./parts/main_head";
import QAHead from "./parts/qa_head";
import AskATutor from "./parts/ask_a_tutor";
import ExpertSolution from "./parts/expert_solution";
import ItemsLists from "./parts/lists"
import { Div } from "../../parts/general";
import If from "../../components/renderIf";
import UserIconDefault from "../../assets/images/user-icon-default.png"

const QuestionsList = [
    {
        title: "How can I solve linear equations in two variables?",
        url: "how-can-i-solve-linear-equations-in-two-variables",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9459.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Mathematics",
        count_answers: "3 answers",
        images: [
            "/Images/Videos_Thumbnails/9460.jpeg",
            "/Images/Videos_Thumbnails/9461.jpeg",
            "/Images/Videos_Thumbnails/9463.jpeg",
        ],
    },
    {
        title: "How can I solve linear equations in two variables? How to apply row-echelon form for “back substitution”?",
        url: "how-can-i-solve-linear-equations-in-two-variables?-how-to-apply-row-echelon-form-for-“back-substitution”?",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9460.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Chemistry",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables?",
        url: "how-can-i-solve-linear-equations-in-two-variables",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9459.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Mathematics",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables? How to apply row-echelon form for “back substitution”?",
        url: "how-can-i-solve-linear-equations-in-two-variables?-how-to-apply-row-echelon-form-for-“back-substitution”?",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9460.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Chemistry",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables?",
        url: "how-can-i-solve-linear-equations-in-two-variables",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9459.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Mathematics",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables? How to apply row-echelon form for “back substitution”?",
        url: "how-can-i-solve-linear-equations-in-two-variables?-how-to-apply-row-echelon-form-for-“back-substitution”?",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9460.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Chemistry",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables?",
        url: "how-can-i-solve-linear-equations-in-two-variables",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9459.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Mathematics",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables? How to apply row-echelon form for “back substitution”?",
        url: "how-can-i-solve-linear-equations-in-two-variables?-how-to-apply-row-echelon-form-for-“back-substitution”?",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9460.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Chemistry",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables?",
        url: "how-can-i-solve-linear-equations-in-two-variables",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9459.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Mathematics",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables? How to apply row-echelon form for “back substitution”?",
        url: "how-can-i-solve-linear-equations-in-two-variables?-how-to-apply-row-echelon-form-for-“back-substitution”?",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9460.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Chemistry",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables?",
        url: "how-can-i-solve-linear-equations-in-two-variables",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9459.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Mathematics",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables? How to apply row-echelon form for “back substitution”?",
        url: "how-can-i-solve-linear-equations-in-two-variables?-how-to-apply-row-echelon-form-for-“back-substitution”?",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9460.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Chemistry",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables?",
        url: "how-can-i-solve-linear-equations-in-two-variables",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9459.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Mathematics",
        count_answers: "3 answers",
    },
    {
        title: "How can I solve linear equations in two variables? How to apply row-echelon form for “back substitution”?",
        url: "how-can-i-solve-linear-equations-in-two-variables?-how-to-apply-row-echelon-form-for-“back-substitution”?",
        video_thumbnail_url: "/Images/Videos_Thumbnails/9460.jpeg",
        user_icon: UserIconDefault,
        user_name: "Alice Y.",
        user_college: "Imperial College of London",
        subject: "Chemistry",
        count_answers: "3 answers",
    },
];

export default function QuestionsAnswers() {
    let { qaURL } = useParams();

    return (
        <>
            <If cond={qaURL}>
                <QAHead item={QuestionsList[0]} />
                <Div className={styles.Container}>
                    <ExpertSolution />
                    <AskATutor />
                    <ItemsLists title={"Related Questions"} items={QuestionsList}/>
                </Div>
            </If>
            <If cond={!qaURL}>
                <MainHead />
                <Div className={styles.Container}>
                    <AskATutor />
                    <ItemsLists title={"Recently Asked Questions"} items={QuestionsList}/>
                </Div>
            </If>
        </>
    );
}