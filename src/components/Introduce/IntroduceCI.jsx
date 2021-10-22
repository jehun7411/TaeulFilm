import React from "react";
import styled, { css } from "styled-components";
import Title from "../atoms/Title";
import service from "../../asset/images/service.png";
import devlop from "../../asset/images/devlop.png";
import cooperation from "../../asset/images/cooperation.png";

const CiSection = styled.div`
  padding: 50px 0 50px 0;
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const IconWrap2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 20%;
`;
const CiIconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 300px;
  height: 80px;
`;
const CiIconImage = styled.div`
  width: 80px;
  height: 80px;

  ${({ number }) => {
    if (number === 1) {
      return css`
        background: url(${service}) center center/contain no-repeat;
      `;
    } else if (number === 2) {
      return css`
        background: url(${devlop}) center center/contain no-repeat;
      `;
    } else if (number === 3) {
      return css`
        background: url(${cooperation}) center center/contain no-repeat;
      `;
    }
  }}
`;
const CiTextWrap = styled.div`
  padding-top: 10px;
  width: 220px;
  height: 80px;
`;
const CiText1 = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
`;

const CiText2 = styled.p`
  padding-top: 5px;
  text-align: center;
  font-weight: 400;
  font-size: 0.875rem;
`;

function IntroduceCI() {
  return (
    <CiSection>
      <Title>경영 이념</Title>
      <IconWrap>
        <CiIconWrap>
          <CiIconImage number={1} />
          <CiTextWrap>
            <CiText1>
              지속적인 서비스 개선
              <br />
            </CiText1>
            <CiText2>
              주기적인 팀회의를 통해 보다
              <br />질 높은 서비스 제공
            </CiText2>
          </CiTextWrap>
        </CiIconWrap>
      </IconWrap>
      <IconWrap2>
        <CiIconWrap>
          <CiIconImage number={2} />
          <CiTextWrap>
            <CiText1>
              개개인의 성장
              <br />
            </CiText1>
            <CiText2>
              자격증 및 온라인 강의 수강
              <br />
              비용 및 시간 적극 지원
            </CiText2>
          </CiTextWrap>
        </CiIconWrap>
        <CiIconWrap>
          <CiIconImage number={3} />
          <CiTextWrap>
            <CiText1>
              개개인의 성장
              <br />
            </CiText1>
            <CiText2>
              주마다 갖는 회의와 자유로운 분위기
              <br />
              에서의 아이디어 창출 및 팀워크 상승
            </CiText2>
          </CiTextWrap>
        </CiIconWrap>
      </IconWrap2>
    </CiSection>
  );
}

export default IntroduceCI;
