import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import introuduce_image from "../../asset/images/introuduce_image.png";
import Inner from "../atoms/Inner";
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
const IntroduceImage = styled.section`
width: 108%;
min-height: 308px;
position: relative;
background: url(${introuduce_image}) no-repeat;
`;
const IntroduceTextWrap = styled.div`
  width: 628px;
  padding-top: 28px;
  margin-left: 532px;
  font-style: normal;
`;
const IntroduceText = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  color: #000000;
`;
const CeoTextWrap = styled.p`
  width: 73px;
  padding-top: 20px;
  margin-left: 767px;
  font-style: normal;
`;


function Introduce() {
  return( 
    <div>
      <Inner>
       <IntroduceLogo>
         <Link to="/">Taeul Film</Link>
       </IntroduceLogo>
       <IntroduceImage>
          <IntroduceTextWrap>
              <IntroduceText>저희 태을필름은 2014년 설립 이래, SKC 필름 사업을 시작으로, 폴리 우레탄 필름(TPU)을 비롯한 각종</IntroduceText>
              <IntroduceText>플라스틱 필름의 제품개발 및 각종 가공 필름에 대한 제품 및 기술 서비스를 제공하고 있습니다.<br/><br/></IntroduceText>
              <IntroduceText>태을필름은 PET필름 및 각종 플라스틱 필름 최상의 선택과 제품설계등의 </IntroduceText>
              <IntroduceText>서비스를 제공해 드리고있습니다.</IntroduceText>
              <IntroduceText>그리고 태을필름은 구축된 튼튼하고 광범위한 네트워크를 활용해 해외와의 비즈니스도 하고 있으며,</IntroduceText>
              <IntroduceText>플라스틱 필름 및 특수 케미칼에 대한 비즈니스도 전개하고 있습니다.<br/><br/></IntroduceText>
              <IntroduceText>앞으로도 태을필름은 고객에게 최상의 서비스와 제품을 제공하기 위해 끊임없이</IntroduceText>
              <IntroduceText>노력할 것을 약속드립니다.</IntroduceText>
          </IntroduceTextWrap>
          <CeoTextWrap>
              <IntroduceText>대표 오홍백</IntroduceText>
          </CeoTextWrap> 
       </IntroduceImage>
    
      </Inner>
      
    </div>
  );
  }
 
export default Introduce;

//dev로 KB가 Merge
