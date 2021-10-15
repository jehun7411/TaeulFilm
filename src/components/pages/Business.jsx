import React from "react";
import styled from "styled-components";
import Inner from "../atoms/Inner";
import SemiInner from "../atoms/SemiInner";
import business from "../../asset/images/business.png";
import PIfilmStatistics from "../../asset/images/PIfilmStatistics.png";
import Title from "../atoms/Title";

const BusinessSection = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 10.1785%;
  position: relative;
  & > div:nth-child(2) {
    margin-bottom: 100px;
  }
`;
const BusinessImage = styled.img``;

const BusinessImgWrap = styled.div`
  width: 40%;
`;
const BusinessImgWrap2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

const BusinessTextWrap = styled.div`
  width: 40%;
  padding-top: 9px;
`;
const BusinessText = styled.p`
  &:nth-child(odd) {
    font-size: 1.25rem;
    padding-bottom: 37px;
  }
  &:nth-child(even) {
    line-height: 1.25rem;
    padding-bottom: 37px;
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
        <Title>PI 필름 전망</Title>
        <BusinessImgWrap2>
          <BusinessImage src={PIfilmStatistics} alt="PIfilmStatistics" />
        </BusinessImgWrap2>
      </SemiInner>
    </Inner>
  );
}

export default Business;
