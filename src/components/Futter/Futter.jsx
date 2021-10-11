import React from "react";
import styled from "styled-components";
import Inner from "../atoms/Inner";

const FutterLine = styled.hr`
size: 1;
margin-top: 50px;
width: 1200px;
color: 1px solid #ADB5BD;
transform: rotate(0.11deg);
`;

const FutterLogo = styled.h1`
  margin-top: 17px;
  margin-left: 182px;
  margin-right: 68px;
  width: 140px;
  height: 58px;
  float: left;
  line-height: 3.625rem;
  font-size: 1.875rem;
  font-family: "Amita", cursive;
  color: #212529;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;
const FutterTextWrap = styled.div`
  width: 100%;
  margin-left: 68px;
  margin-top: 26px;
  margin-left: 68px;
`;
const FutterText = styled.p`
  font-size: 0.75rem;
  color: #000000;
`;
function Futter(){
return(
    <Inner>
        <FutterLine />
        
            <FutterLogo>Taeul Film</FutterLogo>
        <FutterTextWrap>
            <FutterText>태을필름 / 주소 : 경기도 군포시 번영로 505 1142-2 대우 디오플러스 1603호</FutterText>   
            <FutterText>사업자등록번호 : 000-00-00000    대표 : 오홍백</FutterText>
            <FutterText>연락처 : 010 - 0000 - 0000 / FAX. 000)123 - 4567</FutterText>     
        </FutterTextWrap>
    </Inner>
);
}

export default Futter;