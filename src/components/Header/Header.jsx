import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { filmColor } from "../../asset/FilmColor/filmColor";
import Inner from "../atoms/Inner";
import { Film } from "../Film";

const gnbHeight = 50;

const HeaderWrap = styled.header``;

const HeaderInner = styled(Inner)`
  position: relative;
`;
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
  display: flex;
  justify-content: space-around;
  height: ${gnbHeight}px; //template literal
`;

const HeaderItem = styled.li`
  width: 25%;
  color: #eee;
  line-height: ${gnbHeight}px;
  font-size: 1.25rem;
  & a {
    display: block;
    text-align: center;
    transition: ease-in-out 0.3s all;
  }

  ${({ themeColor }) => {
    const [mainColor, semiColor] = themeColor;
    return css`
    & a {
      &:hover {
        background-color: #${semiColor}};
      }
    }
    background-color: #${mainColor};
  `;
  }}

  ${({ navState, themeColor }) => {
    const [mainColor, semiColor] = themeColor;
    const { home, introduce, product, business, faq } = navState;

    if (home)
      return css`
        &:first-of-type {
          background-color: #${semiColor};
        }
      `;
    else if (introduce)
      return css`
        &:nth-child(2) {
          background-color: #${semiColor};
        }
      `;
    else if (product)
      return css`
        &:nth-child(3) {
          background-color: #${semiColor};
        }
      `;
    else if (business)
      return css`
        &:nth-child(4) {
          background-color: #${semiColor};
        }
      `;
    else if (faq)
      return css`
        &:nth-child(5) {
          background-color: #${semiColor};
        }
      `;
    else
      return css`
        background-color: ${mainColor};
      `;
  }}
`;

function Header() {
  const history = useHistory();
  const navInit = {
    home: false,
    introduce: false,
    product: false,
    business: false,
    faq: false,
  };
  const [navState, setNavState] = useState(navInit);
  const [currentColor, setCurrentColor] = useState(["343a40", "868e96"]);
  const onClick = (present) =>
    setNavState(() => ({ ...navInit, [present]: true }));

  const onColorChange = (e) => {
    const currentIndex = e.target.name;
    const targetColor = filmColor.filter(
      (value) => value.no === Number(currentIndex)
    );
    const { color } = targetColor[0];
    setCurrentColor(color);
  };

  const fliterPath = history.location.pathname.replace("/", "");

  useEffect(() => {
    setNavState({ ...navInit, [fliterPath]: true });
  }, []);

  return (
    <HeaderWrap>
      <HeaderInner>
        <Film onColorChange={onColorChange} />
        <HeaderLogo onClick={onClick}>
          <Link to="/">Taeul Film</Link>
        </HeaderLogo>
        <HeaderGnb>
          <HeaderItem
            onClick={() => onClick()}
            navState={navState}
            themeColor={currentColor}
          >
            <Link to="/">홈</Link>
          </HeaderItem>
          <HeaderItem
            onClick={() => onClick("introduce")}
            navState={navState}
            themeColor={currentColor}
          >
            <Link to="/introduce">회사 소개</Link>
          </HeaderItem>
          <HeaderItem
            onClick={() => onClick("product")}
            navState={navState}
            themeColor={currentColor}
          >
            <Link to="/product">제품 소개</Link>
          </HeaderItem>
          <HeaderItem
            onClick={() => onClick("business")}
            navState={navState}
            themeColor={currentColor}
          >
            <Link to="/business">사업 영역</Link>
          </HeaderItem>
          <HeaderItem
            onClick={() => onClick("faq")}
            navState={navState}
            themeColor={currentColor}
          >
            <Link to="/faq">FAQ</Link>
          </HeaderItem>
        </HeaderGnb>
      </HeaderInner>
    </HeaderWrap>
  );
}
export default Header;
