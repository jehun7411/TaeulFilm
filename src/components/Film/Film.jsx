import React from "react";
import styled from "styled-components";
import FilmCase from "./FilmCase";
import FilmTape from "./FilmTape";

const FilmWrap = styled.div`
  position: absolute;
  top: 170px;
  left: -120px;
`;

function Film() {
  return (
    <FilmWrap>
      <FilmCase />
      <FilmTape />
    </FilmWrap>
  );
}

export default Film;
