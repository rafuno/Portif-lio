import React from "react";
import * as S from "./styles";

type skillsProps = {
  name: string;
  image: string;
};

const SkillCard: React.FC<skillsProps> = ({ name, image }) => {
  return (
    <S.ContainerSkillCard>
      <h2>{name}</h2>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </S.ContainerSkillCard>
  );
};

export default SkillCard;
