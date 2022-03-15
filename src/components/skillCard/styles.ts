import styled, { css } from "styled-components";

type skillsProps = {};
export const ContainerSkillCard = styled.div<skillsProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.pinkDot};
    max-width: 180px;
    margin: 0 auto;
    border-radius: 10px;
    h2 {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      color: ${theme.colors.yellow};
      font-size: 16px;
    }
    .image {
      margin: 0 auto;
      text-align: center;
    }
  `}
`;
