import styled, { css } from "styled-components";
export const ContainerTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    .divider {
      height: 1px;
      border: 1px solid ${theme.colors.lightWhite};
      width: 25%;
    }
    .title {
      padding: 10px 10px;
      text-align: center;
      width: 100px;
      margin: 0;
      border: 2px solid ${theme.colors.lightWhite};
      border-radius: 40px;
      background: linear-gradient(
        180deg,
        #101011 0%,
        #1d1a17 13.02%,
        #0d070f 25%,
        #200a1b 77.08%,
        #28061e 88.54%,
        #220517 100%
      );
      h2 {
        color: ${theme.colors.yellow};
        font-size: 22px;
      }
    }
  `}
`;
