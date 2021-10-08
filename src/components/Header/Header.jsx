import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Inner from "../atoms/Inner";

const gnbHeight = 50;

const HeaderWrap = styled.header``;
const HeaderLogo = styled.h1`
  width: 100%;
  height: 120px;
  line-height: 120px;
  text-align: center;
  font-size: 3.75rem;

  & a {
    font-family: "Amita", cursive;
    color: #212529;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`;

const HeaderGnb = styled.ul`
  //리스트인데 순서가 정의되어있지않은 리스트 / ol은 숫자가 매겨져있어서 순서가 정해져있음
  display: flex;
  justify-content: space-around;
  background-color: #343a40;
  height: ${gnbHeight}px; //template literal
`;

const HeaderItem = styled.li`
  // li(list item)
  width: 25%;
  color: #eee;
  line-height: ${gnbHeight}px;
  font-size: 1.25rem;

  & a {
    display: block;
    text-align: center;
    transition: ease-in-out 0.3s all;

    &:hover {
      background-color: #868e96;
    }
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <Inner>
        <HeaderLogo>
          <Link to="/">Taeul Film</Link>
        </HeaderLogo>
        <HeaderGnb>
          <HeaderItem>
            <Link to="/introduce">회사 소개</Link>
          </HeaderItem>
          <HeaderItem>
            <Link to="/product">제품 소개</Link>
          </HeaderItem>
          <HeaderItem>
            <Link to="/business">사업 영역</Link>
          </HeaderItem>
          <HeaderItem>
            <Link to="/faq">F&Q</Link>
          </HeaderItem>
        </HeaderGnb>
      </Inner>
    </HeaderWrap>
  );
}
export default Header;
