import React from "react";
import { ContainerTitle } from "./styles";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <ContainerTitle>
      <div className="divider"></div>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="divider"></div>
    </ContainerTitle>
  );
};

export default Title;
