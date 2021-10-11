import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import introuduce_image from "../../asset/images/introuduce_image.png";
import Inner from "../atoms/Inner";
const ProductLogo = styled.h1`
margin-top: 50px;
width: 100%;
height: 50px;
line-height: 50px;
text-align: center;
font-size: 1.875rem;


& a {
    font-family: "Amita", cursive;
    color: #212529;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`;
  
const IntroduceImage = styled.section`
width: 100%;
min-height: 308px;
position: relative;
background: url(${introuduce_image}) no-repeat;
`;

function Product() {
  return <div>
    <Inner>
    <ProductLogo>
      
    </ProductLogo>
    </Inner>
  </div>;
}

export default Product;
