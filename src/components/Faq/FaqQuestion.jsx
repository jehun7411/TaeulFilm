import React from "react";
import styled from "styled-components";
import { faqList } from "./FaqList";
const Number = styled.p`
  text-align: left;
  position: absolute;
  padding: 12px 0px 15px 43px;
  /* padding-bottom: 15px;
  padding-left: 33px; */
  font-size: 1.125rem;
`;
// const NumberWrap = styled.div`
//   width: 7.6667%;
//   height: 51px;
//   justify-content: center;
//   display: flex;
// `;
const QuestionText = styled.p`
  text-align: center;
  padding: 12px 0px 15px 0px;
`;
// const QuestionTextWrap = styled.div`
//   width: 100%;
//   height: 51px;
//   justify-content: center;
//   display: flex;
//   align-items: center;
// `;

const QuestionBox = styled.div`
  border-top: 1px solid #adb5bd;
`;

function FaqQuestion() {
  for (let i = 0; i < 10; i++) {
    return (
      <QuestionBox>
        <Number>{faqList[i].no}</Number>
        <QuestionText>{faqList[i].Title}</QuestionText>
      </QuestionBox>
    );
  }
}

export default FaqQuestion;
