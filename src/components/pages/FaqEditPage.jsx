import React, { useState } from "react";
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
function FaqEditPage({ history }) {
  console.log(firestore);

  const [inputs, setInputs] = useState({
    Title: "",
    Content: "",
  });

  const onChange = (e) => {
    console.log(e.target.value);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const fetchWrite = async () => {
    await firestore.collection("faq").add(inputs);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    fetchWrite();
    alert("작성 완료!");
    history.push("/Faq");
  };
  return (
    <Inner>
      <FaqTitle>FAQ</FaqTitle>
      <WriteTitleWrap>
        <TitleText>제목</TitleText>
        <WriteTitleBox name="Title" onChange={onChange} />
      </WriteTitleWrap>
      <WriteContetWrap>
        <TitleText>내용</TitleText>
        <WriteContentBox name="Content" onChange={onChange} />
      </WriteContetWrap>
      <EditFinishButtonWrap>
        <EditFinishButton onClick={onSubmit}>글작성</EditFinishButton>
      </EditFinishButtonWrap>
    </Inner>
  );
}

export default FaqEditPage;
