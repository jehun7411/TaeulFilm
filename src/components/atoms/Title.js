import styled, { css } from "styled-components";

const Title = styled.div`
  width: 230px;
  height: 50px;
  margin: 0 auto;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
  /* background-color: #e9ecef; */
  ${({ theme }) =>
    css`
      background-color: #${theme[0]};
      color: #${theme[2]};
    `}
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
`;

export default Title;
