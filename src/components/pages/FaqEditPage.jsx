import React from "react";
import Inner from "../atoms/Inner";
import styled from "styled-components";
import { firestore } from "../../util/api/fbInstance";

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
  padding: 3px;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
`;

const WriteContentBox = styled.textarea`
  width: 95.8333%;
  height: 300px;
  margin-top: 20px;
  margin-left: 31px;
  padding: 5px 0 0 5px;
  font-size: 16px;
  resize: none;
  font-family: "Noto Sans KR", sans-serif;
`;

const WriteContetWrap = styled.div`
  margin-top: 20px;
`;

const EditFinishButton = styled.button`
  margin-top: 10px;
  width: 9%;
  height: 40px;
  background-color: #dee2e6;
  font-family: "Noto Sans KR", sans-serif;
`;
const EditFinishButtonWrap = styled.div`
  text-align: right;
`;
function FaqEditPage() {
  //힌트 useState or useReducer + onChnage(내장) or onSubmit(커스텀)이용
  //1. useReducer or useState로 상태관리할 것을 만듬( 타입은 원하는거 )
  //2. onSubmit이 될때! WriteTitleBox, WriteCOntentBox에 있는 값을 State에 저장
  //3. state에 있는 값을 firestore add안에 할당
  //4. 작성이 잘되었는지 firebase cloud firestore에 가서 확인 후 faq에서 출력
  console.log(firestore);
  const fetchWrite = async () => {
    await firestore.collection("faq").add({ list: "태을필름" });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    fetchWrite();
    alert("작성 완료!");
  };
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
        <EditFinishButton onClick={onSubmit}>글작성</EditFinishButton>
      </EditFinishButtonWrap>
    </Inner>
  );
}

export default FaqEditPage;
