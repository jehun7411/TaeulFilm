import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import introuduce_image from "../../asset/images/introuduce_image.png";
const IntroduceLogo = styled.h1`
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

function Introduce() {
  return( 
    <div>
       <IntroduceLogo>
         <Link to="/">Taeul Film</Link>
       </IntroduceLogo>
       <IntroduceImage>
       </IntroduceImage>
    </div>
  );
  }
 
export default Introduce;

//dev로 KB가 Merge
