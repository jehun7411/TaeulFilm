import React from "react";
import styled, { css } from "styled-components";
import Title from "../atoms/Title";
import kolonpi from "../../asset/images/skckolonpi.png";
import adhesive from "../../asset/images/adhesive.png";

export const InnerSection = styled.section`
  padding-top: 100px;
`;

const ProductWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20%;
  padding-top: 50px;
`;

const ProductBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ProductBox = styled.div`
  width: 340px;
  height: 320px;
  ${({ number }) => {
    return number === 1
      ? css`
          background: url(${kolonpi}) center center/contain no-repeat;
        `
      : css`
          background: url(${adhesive}) center center/contain no-repeat;
        `;
  }}

  box-shadow: rgba(50, 50, 50, 0.35) 0px 5px 15px;
`;

const ProductName = styled.span`
  font-size: 1.25rem;
`;

function MainProduct({ theme }) {
  return (
    <InnerSection>
      <Title theme={theme}>제품</Title>
      <ProductWrap>
        <ProductBoxWrap>
          <ProductBox number={1} />
          <ProductName>SKC Kolon PI</ProductName>
        </ProductBoxWrap>
        <ProductBoxWrap>
          <ProductBox number={2} />
          <ProductName>점착 필름</ProductName>
        </ProductBoxWrap>
      </ProductWrap>
    </InnerSection>
  );
}

export default MainProduct;
