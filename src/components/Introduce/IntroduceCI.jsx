import React from "react";
import styled, { css } from "styled-components";
import Title from "../atoms/Title";
import service from "../../asset/images/service.png";
import devlop from "../../asset/images/devlop.png";
import cooperation from "../../asset/images/cooperation.png";

const CISection = styled.div`
  padding-top: 50px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
`;
const Icon2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 20%;
`;
const CIIconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 300px;
  height: 80px;
`;
const CIIconImage = styled.div`
  width: 80px;
  height: 80px;
  ${({ number }) => {
    return number === 1
      ? css`
          background: url(${service}) center center/contain no-repeat;
        `
      : number === 2
      ? css`
          background: url(${devlop}) center center/contain no-repeat;
        `
      : css`
          background: url(${cooperation}) center center/contain no-repeat;
        `;
  }}
`;
const CITextWrap = styled.div`
  padding-top: 10px;
  width: 220px;
  height: 80px;
`;
const CIText1 = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
`;

const CIText2 = styled.p`
  padding-top: 5px;
  text-align: center;
  font-weight: 400;
  font-size: 0.875rem;
`;

function IntroduceCI() {
  return (
    <CISection>
      <Title>경영 이념</Title>
      <Icon>
        <CIIconWrap>
          <CIIconImage number={1} />
          <CITextWrap>
            <CIText1>
              지속적인 서비스 개선
              <br />
            </CIText1>
            <CIText2>
              주기적인 팀회의를 통해 보다
              <br />질 높은 서비스 제공
            </CIText2>
          </CITextWrap>
        </CIIconWrap>
      </Icon>
      <Icon2>
        <CIIconWrap>
          <CIIconImage number={2} />
          <CITextWrap>
            <CIText1>
              개개인의 성장
              <br />
            </CIText1>
            <CIText2>
              자격증 및 온라인 강의 수강
              <br />
              비용 및 시간 적극 지원
            </CIText2>
          </CITextWrap>
        </CIIconWrap>
        <CIIconWrap>
          <CIIconImage number={3} />
          <CITextWrap>
            <CIText1>
              개개인의 성장
              <br />
            </CIText1>
            <CIText2>
              주마다 갖는 회의와 자유로운 분위기
              <br />
              에서의 아이디어 창출 및 팀워크 상승
            </CIText2>
          </CITextWrap>
        </CIIconWrap>
      </Icon2>
    </CISection>
  );
}

export default IntroduceCI;
