import React from "react";
import styled from "styled-components";
import Inner from "../atoms/Inner";
import { Link } from "react-router-dom";
import skckonlonpi from "../../asset/images/skckolonpi.png";
import PetFilm from "../../asset/images/PetFilm.png";
import ThinFilm from "../../asset/images/ThinFilm.png";
import PvdfFilm from "../../asset/images/PvdfFilm.png";
import SiliconFilm from "../../asset/images/SiliconFilm.png";
import adhesive from "../../asset/images/adhesive.png";
import HardCoatingFilm from "../../asset/images/HardCoatingFilm.png";
import ProductInner from "../atoms/ProductInner";
import HorizonLine from "../atoms/HorizonLine";
import ProductImg from "../atoms/ProductImg";

const ProductWrap = styled.div`
  display: flex;
  justify-content: left;
`;
const ProductWrap2 = styled.div`
  display: flex;
  justify-content: right;
`;

const ProductInner2 = styled.div`
  width: 1000px;
  height: 350px;
  margin: 0 auto;
  border: 1px solid skyblue;
  margin-top: 60px;
`;

const ProductTextWrap = styled.p``;

function Product() {
  return (
    <Inner>
      {/*첫번째 제품*/}

      <ProductInner2>
        <Link to="Skpi">
          <ProductWrap>
            <ProductImg src={skckonlonpi} alt="ProductImg" />

            <ProductTextWrap>안녕하세요!!</ProductTextWrap>
          </ProductWrap>
        </Link>
      </ProductInner2>

      <HorizonLine />

      {/*두번째 제품*/}

      <ProductInner>
        <Link to="Petpi">
          <ProductWrap2>
            <ProductImg src={PetFilm} alt="ProductImg" />

            <ProductTextWrap></ProductTextWrap>
          </ProductWrap2>
        </Link>
      </ProductInner>

      <HorizonLine />

      {/*세번째 제품*/}

      <ProductInner>
        <Link to="Thinpi">
          <ProductWrap>
            <ProductImg src={ThinFilm} alt="ProductImg" />

            <ProductTextWrap></ProductTextWrap>
          </ProductWrap>
        </Link>
      </ProductInner>

      <HorizonLine />

      {/*네번째 제품*/}

      <ProductInner>
        <Link to="Pvdfpi">
          <ProductWrap2>
            <ProductImg src={PvdfFilm} alt="ProductImg" />

            <ProductTextWrap></ProductTextWrap>
          </ProductWrap2>
        </Link>
      </ProductInner>

      <HorizonLine />

      {/*다섯번째 제품*/}

      <ProductInner>
        <Link to="Siliconpi">
          <ProductWrap>
            <ProductImg src={SiliconFilm} alt="ProductImg" />

            <ProductTextWrap></ProductTextWrap>
          </ProductWrap>
        </Link>
      </ProductInner>

      <HorizonLine />

      {/*여섯번째 제품*/}

      <ProductInner>
        <Link to="Adhesivepi">
          <ProductWrap2>
            <ProductImg src={adhesive} alt="ProductImg" />

            <ProductTextWrap></ProductTextWrap>
          </ProductWrap2>
        </Link>
      </ProductInner>

      <HorizonLine />

      {/*일곱번째 제품*/}

      <ProductInner>
        <Link to="Hardcoatingpi">
          <ProductWrap>
            <ProductImg src={HardCoatingFilm} alt="ProductImg" />

            <ProductTextWrap></ProductTextWrap>
          </ProductWrap>
        </Link>
      </ProductInner>
    </Inner>
  );
}

export default Product;
