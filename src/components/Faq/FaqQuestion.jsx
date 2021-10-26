import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import firebase, { firestore } from "../../util/api/fbInstance";
const Number = styled.p`
  text-align: left;
  position: absolute;
  padding: 12px 0px 15px 43px;
`;

const QuestionText = styled.p`
  text-align: center;
  padding: 12px 0px 15px 0px;
`;

const QuestionBox = styled.div`
  border-top: 1px solid #adb5bd;
`;

function FaqQuestion() {
  // const fetchData = async () => {
  //   const tt = await firestore.collection("faq").get();

  //   tt.forEach((doc) => console.log(doc.data()));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  const [posts, setPosts] = useState([
    { Title: "", Content: "" },
    { Title: "", Content: "" },
    { Title: "", Content: "" },
    { Title: "", Content: "" },
    { Title: "", Content: "" },
    { Title: "", Content: "" },
    { Title: "", Content: "" },
    { Title: "", Content: "" },
    { Title: "", Content: "" },
    { Title: "", Content: "" },
  ]);
  useEffect(() => {
    firestore.collection("faq").onSnapshot((snapshot) => {
      const postArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postArray);
    });
  }, []);
  console.log(posts);

  return (
    <>
      <QuestionBox>
        <Number>1</Number>
        <QuestionText>{posts[0].Title}</QuestionText>
      </QuestionBox>
      <QuestionBox>
        <Number>1</Number>
        <QuestionText>{posts[1].Title}</QuestionText>
      </QuestionBox>
      <QuestionBox>
        <Number>1</Number>
        <QuestionText>{posts[2].Title}</QuestionText>
      </QuestionBox>
    </>
  );
}
export default FaqQuestion;
