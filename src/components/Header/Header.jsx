import React from "react";
import styled from "styled-components";
import Inner from "../atoms/Inner";

const HeaderWrap = styled.header``;
const HeaderLogo = styled.h1`
  text-align: center;
  font-size: 2.4rem;
`;

const HeaderGnb = styled.ul`
  //리스트인데 순서가 정의되어있지않은 리스트 / ol은 숫자가 매겨져있어서 순서가 정해져있음
  display: flex;
  justify-content: space-around;
`;

const HeaderItem = styled.li`
  // li(list item)
`;

function Header() {
  return (
    <HeaderWrap>
      <Inner>
        <HeaderLogo>TAEUL</HeaderLogo>
        <HeaderGnb>
          <HeaderItem>회사 소개</HeaderItem>
          <HeaderItem>제품 소개</HeaderItem>
          <HeaderItem>QNA 게시판</HeaderItem>
        </HeaderGnb>
      </Inner>
    </HeaderWrap>
  );
}
export default Header;
