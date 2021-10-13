import React from "react";
import styled from "styled-components";
import Inner from "../atoms/Inner";

const FooterOuter = styled(Inner)`
  height: 100%;
  border-top: 1px solid #adb5bd;
`;

const FooterInner = styled(Inner)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 860px;
  height: 100%;
  position: relative;
`;

const FooterInfo = styled.div``;

const FutterLogo = styled.h2`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  line-height: 3.625rem;
  font-size: 1.875rem;
  font-family: "Amita", cursive;
  color: #212529;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
const FutterTextWrap = styled.footer`
  width: 100%;
  height: 100px;
  margin-top: 50px;
`;
const FutterText = styled.p`
  font-size: 0.75rem;
  color: #000000;
  line-height: 1rem;
`;
function Futter() {
  return (
    <FutterTextWrap>
      <FooterOuter>
        <FooterInner>
          <FutterLogo>Taeul Film</FutterLogo>
          <FooterInfo>
            <FutterText>
              태을필름 / 주소 : 경기도 군포시 번영로 505 1142-2 대우 디오플러스
              1603호
            </FutterText>
            <FutterText>사업자등록번호 : 000-00-00000 대표 : 오홍백</FutterText>
            <FutterText>
              연락처 : 010 - 0000 - 0000 / FAX. 000)123 - 4567
            </FutterText>
          </FooterInfo>
        </FooterInner>
      </FooterOuter>
    </FutterTextWrap>
  );
}

export default Futter;
