import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const QuestionText = styled.p`
  text-align: center;
  padding: 12px 0px 15px 0px;
`;

const QuestionBox = styled.div`
  border-top: 1px solid #adb5bd;
`;

function FaqQuestion({ id, title }) {
  return (
    <>
      <Link to={{ pathname: "/FaqPreviewPage", search: id }}>
        <QuestionBox>
          <QuestionText>{title}</QuestionText>
        </QuestionBox>
      </Link>
    </>
  );
}
export default FaqQuestion;
