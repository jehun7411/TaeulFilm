import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import firebase, { firestore } from "../../util/api/fbInstance";

const QuestionText = styled.p`
  text-align: center;
  padding: 12px 0px 15px 0px;
`;

const QuestionBox = styled.div`
  border-top: 1px solid #adb5bd;
`;

function FaqQuestion({ posts, setPosts, id }) {
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
      <Link to={{ pathname: "/FaqPreviewPage", search: id }}>
        {posts.map((el) => (
          <QuestionBox>
            <QuestionText>{el.Title}</QuestionText>
          </QuestionBox>
        ))}
      </Link>
    </>
  );
}
export default FaqQuestion;
