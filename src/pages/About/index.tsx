import React from "react";
import Title from "../../components/title";
import * as S from "./styles";
import styledComponentImage from "../../assets/styled-img.png";
import reactImage from "../../assets/react-logo.png";
import typeScriptimage from "../../assets/type-script-img.png";
import Skills from "../../components/skillCard";

const About: React.FC = () => {
  const itensAbout = [
    {
      chave: "nome",
      valor: "Rafael Augusto",
    },
    {
      chave: "idade",
      valor: "21",
    },

    { chave: "Estado", valor: "São Paulo" },
    { chave: "e-mail", valor: "rafuno.augusto@gmail.com" },
    { chave: "gitHub", valor: "github.com/rafuno" },
  ];

  const skills = [
    {
      name: "Styled-components",
      image: styledComponentImage,
    },
    {
      name: "ReactJS",
      image: reactImage,
    },
    {
      name: "Typescript",
      image: typeScriptimage,
    },
  ];

  return (
    <S.ContainerAbout>
      <Title title="About" />

      <S.BackgroundAbout>
        <S.Informations>
          <h2>Informações</h2>
          {itensAbout.map((item, index) => (
            <div key={index} className="itens-about">
              <span className="chave">{item.chave}</span>
              <span className="double-dot"> : </span>
              <span className="valor">{item.valor}</span>
            </div>
          ))}
        </S.Informations>

        <S.Stack>
          {skills.map((skill, index) => (
            <div className="column" key={index}>
              <Skills image={skill.image} name={skill.name} />
            </div>
          ))}

          {/*   <h2>Stack</h2>
            <div className="column-one">
              <div className="skill styled">
                <h3>Styled-Components</h3>
                <img src={styledComponentImage} alt="" />
              </div>
            </div>
            <div className="column">
              <div className="skill react">
                <h3>ReactJS</h3>
                <img src={reactImage} alt="" />
              </div>

              <div className="skill ts">
                <h3>TypeScript</h3>
                <img src={typeScriptimage} alt="" />
              </div>
            </div> */}
        </S.Stack>
      </S.BackgroundAbout>
    </S.ContainerAbout>
  );
};

export default About;
