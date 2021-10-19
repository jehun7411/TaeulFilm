import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductImg from "../atoms/ProductImg";

const ListImgWrap = styled.div`
  width: 50%;
`;

const ProductTextWrap = styled.p`
  width: 50%;
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

function ProductItem({ imageLink, no }) {
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
              <ProductTextWrap>안녕하세요!!</ProductTextWrap>
            </>
          ) : (
            <>
              <ProductTextWrap>ㅎㅇ</ProductTextWrap>
              <ListImgWrap>
                <ProductImg src={imageLink} alt="ProductImg" />
              </ListImgWrap>
            </>
          )}
        </ProductWrap>
      </Link>
    </ProductDetailItem>
  );
}

export default ProductItem;
