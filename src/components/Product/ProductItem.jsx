import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductImg from "../atoms/ProductImg";
import filmItem from "../../asset/filmItem/filmItem";

const ListImgWrap = styled.div`
  width: 50%;
`;

const ProductTextWrap = styled.p`
  text-align: center;
`;

const ProductWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetailItem = styled.div`
  &:nth-child(even) {
    ${ListImgWrap} {
      text-align: right;
    }
  }
  &:not(:last-child)::after {
    content: "";
    display: block;
    width: 800px;
    height: 0.5px;
    background-color: #adb5bd;
    margin: 30px auto;
  }
`;
const ProductName = styled.p`
  padding: 50px 0 60px 0;
  font-size: 1.25rem;
`;
const ProductDetail = styled.p`
  line-height: 1.1875rem;
`;
const ProductDetailWrap = styled.div`
  width: 50%;
  text-align: center;
`;

function ProductItem({ imageLink, no, subTitle, subDetail }) {
  const filterNo = Number(no.replace("no=", ""));

  return (
    <ProductDetailItem>
      <Link to={{ pathname: "/detail", search: no }}>
        <ProductWrap>
          {filterNo % 2 === 0 ? (
            <>
              <ListImgWrap>
                <ProductImg src={imageLink} alt="ProductImg" />
              </ListImgWrap>
              <ProductDetailWrap>
                <ProductTextWrap>
                  <ProductName>{subTitle}</ProductName>
                  <ProductDetail>{subDetail}</ProductDetail>
                </ProductTextWrap>
              </ProductDetailWrap>
            </>
          ) : (
            <>
              <ProductDetailWrap>
                <ProductTextWrap>
                  <ProductName>{subTitle}</ProductName>
                  <ProductDetail>{subDetail}</ProductDetail>
                </ProductTextWrap>
              </ProductDetailWrap>
              <ListImgWrap>
                <Link to="/faq">
                  <ProductImg src={imageLink} alt="ProductImg" />
                </Link>
              </ListImgWrap>
            </>
          )}
        </ProductWrap>
      </Link>
    </ProductDetailItem>
  );
}

export default ProductItem;
