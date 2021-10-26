import React from "react";
import Inner from "../atoms/Inner";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FaqTitle = styled.p`
  margin-top: 50px;
  font-size: 1.5625rem;
  text-align: center;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 53px;
  margin-top: 10px;
  border-top: 2px solid #212529;
  border-bottom: 1px solid #adb5bd;
  gap: 3.3333%;
`;
const TitleText = styled.p`
  width: 7.5%;
  padding-left: 33px;
  border-right: 1px solid #212529;
`;
const TitleContent = styled.p`
  display: flex;
`;
const TitleText2 = styled.p`
  width: 7.5%;
  padding-left: 33px;
`;
const TitleWrap2 = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 53px;
  gap: 3.3333%;
`;

const ContentBox = styled.div`
  width: 94.8333%;
  height: 800px;
  border: 0.5px solid #000000;
  margin-left: 33px;
`;
const ListButton = styled.button`
  width: 7.5%;
  height: 40px;
  margin-top: 10px;
  background: #dee2e6;
  font-family: "Noto Sans KR", sans-serif;
`;

const ListButtonWrap = styled.div`
  text-align: center;
`;

function FaqPreviewPage() {
  return (
    <Inner>
      <FaqTitle>FAQ</FaqTitle>
      <TitleWrap>
        <TitleText>제목</TitleText>
        <TitleContent>태을필름 입사 지원방법</TitleContent>
      </TitleWrap>
      <TitleWrap2>
        <TitleText2>내용</TitleText2>
      </TitleWrap2>
      <ContentBox />
      <ListButtonWrap>
        <Link to="/Faq">
          <ListButton>목록</ListButton>
        </Link>
      </ListButtonWrap>
    </Inner>
  );
}
export default FaqPreviewPage;
