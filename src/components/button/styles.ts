import styled, { css } from "styled-components";

type buttonProps = {
  colorButton: "red" | "yellow";
};
const linearRed =
  "linear-gradient(180deg, #EC1E23 0%, #E8B7B9 12.5%, #EC1E23 25%, #EC1E23 100%);";

  const linearYellow = "linear-gradient(180deg, #FDB927 0%, #F5F1E6 12.5%, #FDB927 25%, #FDB927 100%);"



export const ContainerButton = styled.div<buttonProps>`
  ${({ theme, colorButton }) => css`
    background: ${colorButton === "red" && `${linearRed}`};

    background: ${colorButton === "yellow" && `${linearYellow}`};
    width: 115px;
    height: 40px;
    border-radius: 40px;
    text-align: center;
    padding: 10px;
    @media (min-width: ${theme.screen.md}px) {
      width: 220px;
      height: 60px;
      padding: 20px;
    }

    button {
      margin-right: 10px;
      font-size: 16px;
      color: ${theme.colors.lightBlack};
      font-weight: bold;
    }
  `}
`;
