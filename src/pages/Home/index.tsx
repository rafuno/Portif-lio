import React from "react";
import Button from "../../components/button";
import hireIcon from "../../assets/icon/hireIcon.svg";
import startIcon from "../../assets/icon/startIcon.svg";
import { ContainerHome } from "./styles";

const Home: React.FC = () => {
  /* const [count, setCount] = useState(0); */

  return (
    <ContainerHome>
      {/* <div>
        <button onClick={() => setCount(count + 1)}> *aperta aq carai* </button>
        <p>Voce apertou {count} vezes</p>
      </div> */}

      <div className="container-title">
        <span>&lt;</span> <h1>Rafael Augusto </h1> <span> /&gt; </span>
      </div>
      <div className="container-subtitle">
        <span>&lt;</span> <h2>Desenvolvedor Front-End</h2> <span> /&gt; </span>
      </div>
      <div className="button-position">
        <div className="button">
          <Button iconButton={hireIcon} colorButton="red">
            HIRE
          </Button>
        </div>
        <div className="button">
          <Button iconButton={startIcon} colorButton="yellow">
            START
          </Button>
        </div>
      </div>
    </ContainerHome>
  );
};
export default Home;
