import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import queryString from "query-string";
import Inner from "../atoms/Inner";
import Title from "../atoms/Title";
import ProductImg from "../atoms/ProductImg";
import List from "../atoms/List";
import SemiInner from "../atoms/SemiInner";
import filmItem from "../../asset/filmItem/filmItem";

const FilmSemiInner = styled(SemiInner)`
  margin: 60px auto 0;
`;

const ProTitleGap = styled.section`
  margin: 30px 0 99px;
`;

const ProPictureGap = styled.section`
  display: flex;
`;

const ProductTextWrap = styled.div`
  width: 46%;
  padding-top: 28px;
`;

const ProductText = styled.p`
  font-size: 0.9375rem;
  line-height: 1.5rem;
  margin-left: 30px;
`;

const ProductImgWrap = styled.div`
  width: 50%;
  text-align: center;
`;

const DetailInfo = styled.p`
  font-size: 1.25rem;
  margin-bottom: 23px;
  text-align: center;
`;
const TextWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 61px;
`;

function Detail() {
  const history = useHistory();
  const { search } = history.location;
  const query = queryString.parse(search);
  const filmState = filmItem.filter((item) => item.no === Number(query.no));
  const { area, prop, image, subTitle, name } = filmState[0];
  return (
    <Inner>
      <FilmSemiInner>
        <ProTitleGap>
          <Title>{subTitle}</Title>
        </ProTitleGap>
        <ProPictureGap>
          <ProductImgWrap>
            <ProductImg src={image} alt={name} />
          </ProductImgWrap>
          <TextWrap>
            <ProductTextWrap>
              <DetailInfo>특성</DetailInfo>
              <ProductText>
                {prop?.map((item) => (
                  <li>{item}</li>
                ))}
              </ProductText>
            </ProductTextWrap>
            <ProductTextWrap>
              <DetailInfo>적용 분야</DetailInfo>
              <ProductText>
                {area?.map((item) => (
                  <li>{item}</li>
                ))}
              </ProductText>
            </ProductTextWrap>
          </TextWrap>
        </ProPictureGap>
        <Link to="Product">
          <List>목록으로</List>
        </Link>
      </FilmSemiInner>
    </Inner>
  );
}

export default Detail;
