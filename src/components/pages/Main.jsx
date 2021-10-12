import React from "react";
import styled from "styled-components";
import Inner from "../atoms/Inner";
import bannerImage from "../../asset/images/main_banner.png";

const Banner = styled.section`
  margin-top: 50px;
  width: 100%;
  min-height: 448px;
  position: relative;
  background: url(${bannerImage}) center center no-repeat;
`;

const BannerTextWrap = styled.div`
  width: 350px;
  padding: 10px 15px;
  border: 1px solid #343a40;
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f1f3f5;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));

  & > p:nth-child(2) {
    margin-left: 17px;
  }

  & > p:nth-child(3) {
    margin-left: 66px;
  }
`;

// 17,66 ..

const BannerText = styled.p`
  font-family: "Nanum Brush Script", cursive;
  font-size: 1.375rem;
  color: #212529;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 1.8rem;
`;

const BannerLogo = styled.strong`
  font-family: "Amita", cursive;
  font-weight: bold;
  font-size: 1.0625rem;
`;

function Main() {
  console.log("main");
  return (
    <div>
      <Inner>
        <Banner>
          <BannerTextWrap>
            <BannerText>
              <BannerLogo>Taeul Film</BannerLogo> 에서는
            </BannerText>
            <BannerText>고객에게 언제나 최상의 서비스와</BannerText>
            <BannerText>최상의 필름을 제공할 것을 약속드립니다</BannerText>
          </BannerTextWrap>
        </Banner>
      </Inner>
    </div>
  );
}
export default Main;
