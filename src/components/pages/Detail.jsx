import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import queryString from "query-string";
import Inner from "../atoms/Inner";

import ProductImg from "../atoms/ProductImg";
import List from "../atoms/List";
import SemiInner from "../atoms/SemiInner";
import filmItem from "../../asset/filmItem/filmItem";

const FilmSemiInner = styled(SemiInner)`
  margin: 90px auto 0;
`;

const Title = styled.div`
  width: 308px;
  height: 55px;
  margin: 0 auto;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
  ${({ theme }) =>
    css`
      background-color: #${theme[0]};
      color: #${theme[2]};
    `}
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
`;

const Litag = styled.li``;

const ProTitleGap = styled.section`
  margin: 0 0 99px;
`;

const ProPictureGap = styled.section`
  display: flex;
`;

const ProductTextWrap = styled.div`
  width: 46%;
  padding-top: 5px;
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

const SemiDetail = styled.p`
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

function Detail({ theme }) {
  const history = useHistory();
  const { search } = history.location;
  const query = queryString.parse(search);
  const filmState = filmItem.filter((item) => item.no === Number(query.no));
  const { area, prop, image, subTitle, name } = filmState[0];
  return (
    <Inner>
      <FilmSemiInner>
        <ProTitleGap>
          <Title theme={theme}>{subTitle}</Title>
        </ProTitleGap>
        <ProPictureGap>
          <ProductImgWrap>
            <ProductImg src={image} alt={name} />
          </ProductImgWrap>
          <TextWrap>
            <ProductTextWrap>
              <SemiDetail>특성</SemiDetail>
              <ProductText>
                {prop?.map((item) => (
                  <Litag>{item}</Litag>
                ))}
              </ProductText>
            </ProductTextWrap>
            <ProductTextWrap>
              <SemiDetail>적용 분야</SemiDetail>
              <ProductText>
                {area?.map((item) => (
                  <Litag>{item}</Litag>
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
