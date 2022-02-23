import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 10vw;
    background: linear-gradient(
      180deg,
      #483178 0%,
      #483178 14.28%,
      #9e3f77 100%
    );
  `}
`;
