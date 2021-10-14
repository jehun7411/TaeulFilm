import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
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
  background-color: #343a40;
  ${({ navState }) => {
    const { introduce, product, business, faq } = navState;
    if (introduce)
      return css`
        &:first-of-type {
          background-color: #868e96;
        }
      `;
    else if (product)
      return css`
        &:nth-child(2) {
          background-color: #868e96;
        }
      `;
    else if (business)
      return css`
        &:nth-child(3) {
          background-color: #868e96;
        }
      `;
    else if (faq)
      return css`
        &:nth-child(4) {
          background-color: #868e96;
        }
      `;
    else
      return css`
        background-color: #343a40;
      `;
  }}
`;

function Header() {
  const history = useHistory();
  const navInit = {
    introduce: false,
    product: false,
    business: false,
    faq: false,
  };
  const [navState, setNavState] = useState(navInit);

  const onClick = (present) =>
    setNavState(() => ({ ...navInit, [present]: true }));

  const fliterPath = history.location.pathname.replace("/", "");

  useEffect(() => {
    setNavState({ ...navInit, [fliterPath]: true });
  }, [setNavState]);

  return (
    <HeaderWrap>
      <Inner>
        <HeaderLogo onClick={onClick}>
          <Link to="/">Taeul Film</Link>
        </HeaderLogo>
        <HeaderGnb>
          <HeaderItem onClick={() => onClick("introduce")} navState={navState}>
            <Link to="/introduce">회사 소개</Link>
          </HeaderItem>
          <HeaderItem onClick={() => onClick("product")} navState={navState}>
            <Link to="/product">제품 소개</Link>
          </HeaderItem>
          <HeaderItem onClick={() => onClick("business")} navState={navState}>
            <Link to="/business">사업 영역</Link>
          </HeaderItem>
          <HeaderItem onClick={() => onClick("faq")} navState={navState}>
            <Link to="/faq">FAQ</Link>
          </HeaderItem>
        </HeaderGnb>
      </Inner>
    </HeaderWrap>
  );
}
export default Header;
