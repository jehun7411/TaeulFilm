import React from "react";
import styled, { css } from "styled-components";

const FilmCaseWrap = styled.div`
  display: flex;
  gap: 5px;
  width: 105px;
`;

const FilmSide = styled.div`
  width: 8px;
  height: 58px;
  background-color: #222;
  ${({ pos }) => {
    return pos === "left"
      ? css`
          border-radius: 10px 0 0 10px;
        `
      : css`
          border-radius: 0px 10px 10px 0px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 12px;
            transform: translateY(-50%);
            width: 8px;
            height: 30px;
            border-radius: 0 10px 10px 0;
            background-color: #222;
          }
        `;
  }}
`;

const FilmCenter = styled.div`
  width: 67px;
  height: 58px;
  background-color: #222;
`;

function FilmCase() {
  return (
    <FilmCaseWrap>
      <FilmSide pos="left" />
      <FilmCenter />
      <FilmSide pos="right" />
    </FilmCaseWrap>
  );
}

export default FilmCase;
