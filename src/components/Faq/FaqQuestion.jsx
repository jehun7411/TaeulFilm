import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import firebase, { firestore } from "../../util/api/fbInstance";

const QuestionText = styled.p`
  text-align: center;
  padding: 12px 0px 15px 0px;
`;

const QuestionBox = styled.div`
  border-top: 1px solid #adb5bd;
`;

function FaqQuestion() {
  const [posts, setPosts] = useState([{ Title: "", Content: "" }]);
  useEffect(() => {
    firestore.collection("faq").onSnapshot((snapshot) => {
      const postArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postArray);
    });
  }, []);

  return (
    <>
      {posts.map((el) => (
        <QuestionBox>
          <QuestionText>{el.Title}</QuestionText>
        </QuestionBox>
      ))}
    </>
  );
}
export default FaqQuestion;
