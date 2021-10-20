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

const FooterLogo = styled.h2`
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
const FooterTextWrap = styled.footer`
  width: 100%;
  height: 100px;
  margin-top: 50px;
`;
const FooterText = styled.p`
  font-size: 0.75rem;
  color: #000000;
  line-height: 1rem;
`;
function Footer() {
  return (
    <FooterTextWrap>
      <FooterOuter>
        <FooterInner>
          <FooterLogo>Taeul Film</FooterLogo>
          <FooterInfo>
            <FooterText>
              태을필름 / 주소 : 경기도 군포시 번영로 505 1142-2 대우 디오플러스
              1603호
            </FooterText>
            <FooterText>사업자등록번호 : 000-00-00000 대표 : 오홍백</FooterText>
            <FooterText>
              연락처 : 010 - 0000 - 0000 / FAX. 000)123 - 4567
            </FooterText>
          </FooterInfo>
        </FooterInner>
      </FooterOuter>
    </FooterTextWrap>
  );
}

export default Footer;
