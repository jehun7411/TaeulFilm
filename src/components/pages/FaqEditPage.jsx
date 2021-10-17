import React from "react";
import Inner from "../atoms/Inner";
import styled from "styled-components";

const FaqTitle = styled.p`
  margin-top: 50px;
  font-size: 1.5625rem;
  text-align: center;
`;
const WriteTitleWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 10px;
  border-top: 2px solid #212529;
  border-bottom: 1px solid #adb5bd;
  height: 55px;
`;
const TitleText = styled.p`
  margin-left: 31px;
  &:nth-child(odd) {
    margin-right: 31px;
  }
`;
const WriteTitleBox = styled.input`
  width: 41.6667%;
  height: 35px;
`;

const WriteContentBox = styled.input`
  width: 95.8333%;
  height: 800px;
  margin-top: 20px;
  margin-left: 31px;
`;

const WriteContetWrap = styled.div`
  margin-top: 20px;
`;

const EditFinishButton = styled.button`
  margin-top: 10px;
  width: 9%;
  height: 40px;
  background-color: #dee2e6;
`;
const EditFinishButtonWrap = styled.div`
  text-align: right;
`;
function FaqEditPage() {
  return (
    <Inner>
      <FaqTitle>FAQ</FaqTitle>
      <WriteTitleWrap>
        <TitleText>제목</TitleText>
        <WriteTitleBox />
      </WriteTitleWrap>
      <WriteContetWrap>
        <TitleText>내용</TitleText>
        <WriteContentBox />
      </WriteContetWrap>
      <EditFinishButtonWrap>
        <EditFinishButton>글작성</EditFinishButton>
      </EditFinishButtonWrap>
    </Inner>
  );
}

export default FaqEditPage;
