import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Location from "./Location";
import { InnerSection } from "./MainProduct";

const MapWrap = styled.div`
  display: flex;
  padding-top: 50px;
`;

const KakaoMap = styled.div`
  width: 78.4%;
`;

const MapInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 78.4%);
  background: #fff9db;
`;

const MapInfoText = styled.p`
  font-size: 1.125rem;
  line-height: 1.625rem;
  font-weight: 500;
  text-align: center;
`;

function MainMap({ theme }) {
  return (
    <InnerSection>
      <Title theme={theme}>회사 약도</Title>
      <MapWrap>
        <KakaoMap>
          <Location />
        </KakaoMap>
        <MapInfo>
          <MapInfoText>
            산본역 3번출구 앞<br />
            대우 디오플러스 1603호
            <br />
            지번:경기 군포시 번영로505,
            <br /> 1603호
            <br /> 연락처:010-3537-7411
          </MapInfoText>
        </MapInfo>
      </MapWrap>
    </InnerSection>
  );
}

export default MainMap;
