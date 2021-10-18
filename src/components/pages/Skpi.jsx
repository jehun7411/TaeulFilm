import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Inner from "../atoms/Inner";
import Title from "../atoms/Title";
import ProductImg from "../atoms/ProductImg";
import skckonlonpi from "../../asset/images/skckolonpi.png";
import List from "../atoms/List";

const SmallInner = styled.div`
  width: 1200px;
  height: 685px;
  margin-top: 60px;
  padding-bottom: 60px;
  border: 1px solid blue;
`;

const ProTitleGap = styled.section`
  margin-top: 30px;
  margin-bottom: 99px;
`;

const ProPictureGap = styled.section`
  margin-left: 147px;
  display: flex;
`;

const ProductTextWrap = styled.div`
  width: 46%;
  padding-top: 28px;
  font-style: normal;
`;

const ProductText = styled.p`
  font-size: 15px;
  line-height: 1.5rem;
  margin-left: 30px;
`;

const Detail = styled.p`
  font-size: 20px;
  margin-bottom: 23px;
  text-align: center;
`;
const TextWrap = styled.div`
  width: 600px;
  display: flex;
  gap: 96px;
  margin-left: 80px;
  margin-top: 61px;
`;

function Skpi() {
  return (
    <Inner>
      <SmallInner>
        <ProTitleGap>
          <Title>SKCKOLON 필름</Title>
        </ProTitleGap>
        <ProPictureGap>
          <ProductImg src={skckonlonpi} alt="ProductImg" />
          <TextWrap>
            <ProductTextWrap>
              <Detail>특성</Detail>
              <ProductText>
                <li>최고의 내한성 : -270℃</li>
                <li>최고의 내열성 : 400℃</li>
                <li>공급가능 최저두께 : 7.5㎛</li>
                <li>공급가능 최고두께 : 75㎛</li>
              </ProductText>
            </ProductTextWrap>
            <ProductTextWrap>
              <Detail>적용 분야</Detail>
              <ProductText>
                <li>FPCB 기재</li>
                <li>FPCB Coverlay 필름</li>
                <li>COF(Chip on Film) 기재</li>
                <li>고온에 소각후 방열시트로 사용</li>
                <li>Drive IC</li>
              </ProductText>
            </ProductTextWrap>
          </TextWrap>
        </ProPictureGap>
        <Link to="Product">
          <List>목록으로</List>
        </Link>
      </SmallInner>
    </Inner>
  );
}

export default Skpi;
