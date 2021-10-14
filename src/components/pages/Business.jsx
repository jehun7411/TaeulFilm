import React from "react";
import styled from "styled-components";
import Inner from "../atoms/Inner";
import SemiInner from "../atoms/SemiInner";
import business from "../../asset/images/business.png";
import Title from "../atoms/Title";

const BusinessSection = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const BusinessImage = styled.img``;

const BusinessImgWrap = styled.div`
  width: 50%;
`;

const BusinessTextWrap = styled.div`
  width: 50%;
  padding-top: 9px;
  padding-left: 62px;
  font-style: normal;
`;
const BusinessText = styled.p`
  &:nth-child(odd) {
    padding-bottom: 45px;
    font-size: 1.5625rem;
  }
  &:nth-child(even) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    padding-bottom: 45px;
  }
`;

function Business() {
  return (
    <Inner>
      <SemiInner>
        <BusinessSection>
          <Title>사업 영역</Title>
        </BusinessSection>
        <BusinessSection>
          <BusinessImgWrap>
            <BusinessImage src={business} alt="BusinessImage" />
          </BusinessImgWrap>
          <BusinessTextWrap>
            <BusinessText>플라스틱 필름사업</BusinessText>
            <BusinessText>
              -SKC PET,PI필름판매
              <br />
              -TPU Film 생산 및 판매(내수 및 수출)
              <br />
              -PCSheet(Film)판매
              <br />
              -각종 코팅 필름 및 이형 필름 개발/판매
              <br />
              -기타 특수 플라스틱 필름 개발 : 원단 및 표면 코팅 폼
            </BusinessText>
            <BusinessText>특수케미칼/필름 수입,수출</BusinessText>
            <BusinessText>
              -일본 및 중국 Chemical 수입 및 수출
              <br />
              -일본 및 중국 Plastic 필름, 가공필름 수입 및 수출
            </BusinessText>
          </BusinessTextWrap>
        </BusinessSection>
      </SemiInner>
    </Inner>
  );
}

export default Business;
