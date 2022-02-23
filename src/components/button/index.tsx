import React from "react";
import { ContainerButton } from "./styles";

type buttonProps = {
  colorButton: "red" | "yellow";
  iconButton: string;
};

const Button: React.FC<buttonProps> = ({
  children,
  colorButton,
  iconButton,
}) => {
  return (
    <ContainerButton colorButton={colorButton}>
      <div>
        <button>{children}</button>
        <img src={iconButton} alt="" />
      </div>
    </ContainerButton>
  );
};

export default Button;
