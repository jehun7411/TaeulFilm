import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Inner from "../atoms/Inner";

const HeaderWrap = styled.header``;
const HeaderLogo = styled.h1`
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 3.75rem;
`;

const HeaderGnb = styled.ul`
  //리스트인데 순서가 정의되어있지않은 리스트 / ol은 숫자가 매겨져있어서 순서가 정해져있음
  display: flex;
  justify-content: space-around;
  background-color: #222;
  height: 40px;
`;

const HeaderItem = styled.li`
  // li(list item)
  color: #eee;
  line-height: 40px;
`;

function Header() {
  return (
    <HeaderWrap>
      <Inner>
        <HeaderLogo>
          <Link to="/">Taeul Film</Link>
        </HeaderLogo>
        <HeaderGnb>
          <HeaderItem>회사 소개</HeaderItem>
          <HeaderItem>제품 소개</HeaderItem>
          <HeaderItem>
            <Link to="/business">사업 영역</Link>
          </HeaderItem>
          <HeaderItem>Q&A</HeaderItem>
        </HeaderGnb>
      </Inner>
    </HeaderWrap>
  );
}
export default Header;
