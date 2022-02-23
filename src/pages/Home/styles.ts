import styled, { css } from "styled-components";
export const ContainerHome = styled.div`
  ${({ theme }) => css`
    margin: 110px 0;
    height: 100vh;
    .container-title {
      background: linear-gradient(
        180deg,
        #101011 0%,
        #1d1a17 13.02%,
        #0d070f 25%,
        #200a1b 77.08%,
        #28061e 88.54%,
        #220517 100%
      );
      border-radius: 40px;
      width: 250px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (min-width: ${theme.screen.md}px) {
        width: 70%;
      }
      span {
        color: ${theme.colors.lightWhite};
        font-size: 20px;
        font-weight: bold;
        margin: 10px;
      }

      h1 {
        color: ${theme.colors.lightGreen};
        font-size: 20px;
        @media (min-width: ${theme.screen.md}px) {
          font-size: 40px;
        }
      }
    }
    .container-subtitle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 75px;
      h2 {
        color: ${theme.colors.white};
        font-size: 20px;
        text-align: center;
        @media (min-width: ${theme.screen.md}px) {
          font-size: 42px;
        }
      }
      span {
        color: ${theme.colors.lightWhite};
        font-size: 20px;
        font-weight: bold;
        margin: 10px;
      }
    }
    .button-position {
      display: flex;
      justify-content: center;
      margin-top: 30px;

      .button {
        margin: 10px;
        cursor: pointer;
      }
    }
  `}
`;
