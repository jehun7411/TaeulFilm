import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import introuduceImage from "../../asset/images/introuduce_image.png";
import Inner from "../atoms/Inner";
import SemiInner from "../atoms/SemiInner";
import IntroduceCI from "../Introduce/IntroduceCI";

const IntroduceLogo = styled.h1`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  line-height: 3.125rem;
  text-align: center;
  font-size: 1.875rem;

  & a {
    font-family: "Amita", cursive;
    color: #212529;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`;

const IntroduceWrap = styled.section`
  display: flex;
  justify-content: space-between;
  /* min-height: 308px; */
  position: relative;
  /* background: url(${introuduceImage}) no-repeat; */
`;

const IntroduceImgWrap = styled.div`
  width: 40%;
`;

const IntroduceImg = styled.img``;

const IntroduceTextWrap = styled.div`
  width: 56.1%;
  padding-top: 28px;
  font-style: normal;
`;

const IntroduceText = styled.p`
  &:nth-child(odd) {
    padding-bottom: 25px;
  }

  font-size: 0.9375rem;
  line-height: 1.5rem;
`;

const CeoTextWrap = styled.p`
  padding-top: 20px;
  font-size: 0.9375rem;
  text-align: center;
`;

function Introduce() {
  return (
    <div>
      <Inner>
        <SemiInner>
          <IntroduceLogo>
            <Link to="/">Taeul Film</Link>
          </IntroduceLogo>
          <IntroduceWrap>
            <IntroduceImgWrap>
              <IntroduceImg src={introuduceImage} alt="companyImg" />
            </IntroduceImgWrap>

            <IntroduceTextWrap>
              <IntroduceText>
                저희 태을필름은 2014년 설립 이래, SKC 필름 사업을 시작으로, 폴리
                우레탄 필름(TPU)을 비롯한 각종 플라스틱 필름의 제품개발 및 각종
                가공 필름에 대한 제품 및 기술 서비스를 제공하고 있습니다.
              </IntroduceText>
              <IntroduceText>
                태을필름은 PET필름 및 각종 플라스틱 필름 최상의 선택과
                <br />
                제품설계등의 서비스를 제공해 드리고있습니다.
              </IntroduceText>
              <IntroduceText>
                그리고 태을필름은 구축된 튼튼하고 광범위한 네트워크를 활용해
                해외와의 비즈니스도 하고 있으며,
                <br />
                플라스틱 필름 및 특수 케미칼에 대한 비즈니스도 전개하고
                있습니다.
              </IntroduceText>
              <IntroduceText>
                앞으로도 태을필름은 고객에게 최상의 서비스와 제품을 제공하기
                위해 끊임없이
                <br />
                노력할 것을 약속드립니다.
              </IntroduceText>
              <CeoTextWrap>대표 오홍백</CeoTextWrap>
            </IntroduceTextWrap>
          </IntroduceWrap>
          <IntroduceCI />
        </SemiInner>
      </Inner>
    </div>
  );
}

export default Introduce;
