import React from "react";
import styled, { css } from "styled-components";
import Inner from "../atoms/Inner";
import { Link } from "react-router-dom";
import FaqQuestion from "../Faq/FaqQuestion";
import LeftArrow from "../../asset/images/LeftArrow.png";
import RightArrow from "../../asset/images/RightArrow.png";

const FaqSection = styled.div`
  margin-top: 50px;
  border-bottom: 1px solid #adb5bd;
`;

const FaqTitle = styled.p`
  font-size: 1.5625rem;
  text-align: center;
`;
const InfoBar = styled.div`
  margin-top: 10px;
  border-top: 2px solid #212529;
`;

const Question = styled.p`
  text-align: center;
  padding: 12px 0px 15px 0px;
`;
const EditButton = styled.button`
  margin-top: 10px;
  width: 9%;
  height: 40px;
  background-color: #dee2e6;
  font-family: "Noto Sans KR", sans-serif;
`;

const FaqButtonWrap = styled.div`
  text-align: right;
`;
const PageNumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9%;
  margin-top: 5px;
`;
const PageNumber = styled.p`
  text-align: center;
`;
const Arrow = styled.div`
  width: 35px;
  height: 35px;
  ${({ number }) => {
    return number === 1
      ? css`
          background: url(${LeftArrow}) center center/contain no-repeat;
        `
      : css`
          background: url(${RightArrow}) center center/contain no-repeat;
        `;
  }}
`;
function Faq({ posts, setPosts }) {
  console.log(posts);
  return (
    <Inner>
      <FaqSection>
        <FaqTitle>FAQ</FaqTitle>
        <InfoBar>
          <Question>질문</Question>
        </InfoBar>
        {posts.map((item) => {
          const { id, Title, Content } = item;
          const queryElement = { id };
          const queryMatter = Object.entries(queryElement)
            .map((e) => e.join("="))
            .join("&");
          return (
            <FaqQuestion
              posts={posts}
              setPosts={setPosts}
              id={queryMatter}
              title={Title}
              Content={Content}
            />
          );
        })}
      </FaqSection>

      <PageNumberWrap>
        <Arrow number={1} />
        <PageNumber>
          <Link to="/faq">1</Link>
        </PageNumber>
        <Arrow number={2} />
      </PageNumberWrap>

      <FaqButtonWrap>
        <Link to="/FaqEditPage">
          <EditButton>글작성</EditButton>
        </Link>
      </FaqButtonWrap>
    </Inner>
  );
}

export default Faq;
