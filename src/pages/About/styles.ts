import styled, { css } from "styled-components";
import background from "../../assets/fundo-react-estrelado.png";

export const BackgroundAbout = styled.div`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: inherit;
    background-attachment: unset;
    background-position: center;
    border-radius: 10px;
    margin: 10px;
    padding: 50px 10px;

    .content {
      display: flex;
      justify-content: space-around;
      padding: 20px;
    }
  `}
`;
export const ContainerAbout = styled.div`
  ${({ theme }) => css`
    padding-top: 30px;
    padding-bottom: 200px;
    background: linear-gradient(
      180deg,
      #9e3f77 100%,
      #483178 0%,
      #483178 14.28%
    );
  `}
`;

export const Informations = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: 25px;
    max-width: 450px;
    border-radius: 10px;
    margin: 20px auto;
    opacity: 0.9;
    h2 {
      font-size: medium;
      text-align: center;
      margin-bottom: 10px;
      color: ${theme.colors.yellow};
    }

    .itens-about {
      font-size: 13px;
      .chave {
        color: ${theme.colors.blueLetter};
      }
      .valor {
        color: ${theme.colors.lightBlue};
      }
      .double-dot {
        color: ${theme.colors.pinkDot};
      }

      @media (min-width: ${theme.screen.md}px) {
        .chave {
          font-size: 25px;
        }
        .valor {
          font-size: 25px;
        }
        .double-dot {
          font-size: 25px;
        }
      }
    }
  `}
`;
export const Stack = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: 25px;
    border-radius: 10px;
    max-width: 550px;
    margin: 10px auto;
    opacity: 0.7;
    .column-one {
      h3 {
        font-size: 14px;
        padding: 10px;
      }
    }
    .column {
      @media (min-width: ${theme.screen.md}px) {
        display: flex;
        justify-content: space-around;
      }
    }
    .skill {
      margin: 0 auto;

      max-width: 200px;
      text-align: center;
      padding: 10px;
      border: 1px solid ${theme.colors.lightWhite};
      margin-bottom: 10px;

      img {
        width: 150px;
      }
    }

    h3 {
      color: ${theme.colors.lightGreen};
      font-size: 14px;
      padding: 10px;
    }
  `}
`;
