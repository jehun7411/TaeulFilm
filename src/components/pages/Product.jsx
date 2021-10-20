import React from "react";
import styled from "styled-components";
import Inner from "../atoms/Inner";
import ProductItem from "../Product/ProductItem";
import filmItem from "../../asset/filmItem/filmItem";

const ProductInner = styled(Inner)`
  width: 1000px;
  padding-top: 60px;
`;

function Product() {
  return (
    <Inner>
      <ProductInner>
        {filmItem.map((item) => {
          const { image, no, subDetail, subTitle } = item;
          const queryElement = { no };
          const queryMatter = Object.entries(queryElement)
            .map((e) => e.join("="))
            .join("&");
          return (
            <ProductItem
              imageLink={image}
              no={queryMatter}
              subTitle={subTitle}
              subDetail={subDetail}
            />
          );
        })}
      </ProductInner>
    </Inner>
  );
}

export default Product;
