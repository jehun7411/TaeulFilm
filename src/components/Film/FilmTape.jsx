import React from "react";
import styled, { css } from "styled-components";
import { filmColor } from "../../asset/FilmColor/FilmColor";

const FilmTapeList = styled.ul`
  margin-top: 3px;
`;

const FilmTapeItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 60px;
  height: 44px;
  margin-left: 16px;
  background-color: #222;
`;

const FilmTapeEmptyWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  height: 100%;
`;

const FilmTapeEmptyItem = styled.div`
  width: 6px;
  height: 8px;
  background-color: #fff;
`;

const FilmTapeColor = styled.div`
  width: 53.3333%;
  height: 37px;
  background-color: #${({ color }) => color};
`;

function FilmTape() {
  return (
    <FilmTapeList>
      {filmColor.map((value) => {
        const { no, color } = value;
        console.log(color);
        return (
          <FilmTapeItem key={no}>
            <FilmTapeEmptyWrap>
              <FilmTapeEmptyItem />
              <FilmTapeEmptyItem />
              <FilmTapeEmptyItem />
            </FilmTapeEmptyWrap>
            <FilmTapeColor color={color} />
            <FilmTapeEmptyWrap>
              <FilmTapeEmptyItem />
              <FilmTapeEmptyItem />
              <FilmTapeEmptyItem />
            </FilmTapeEmptyWrap>
          </FilmTapeItem>
        );
      })}
    </FilmTapeList>
  );
}

export default FilmTape;
