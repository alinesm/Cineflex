import { useState } from "react";
import styled from "styled-components";
import SuccessPage from "./SuccessPage";
import Movies from "./Movies";
import SeatsPage from "./SeatsPage";
import ChooseSectionPage from "./ChooseSectionPage";

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");

  return (
    <>
      <HeaderStyle>CINEFLEX</HeaderStyle>
      {/* <MoviesStyle>
        <p>Selecione o filme</p>
        <Movies />
      </MoviesStyle> */}

      {/* <ChooseSectionPage /> */}
      <SeatsPage nome={nome} setNome={setNome} cpf={cpf} setCPF={setCPF} />
      <SuccessPage nome={nome} cpf={cpf} />
    </>
  );
}

export default App;

const HeaderStyle = styled.div`
  background: #c3cfd9;
  width: 100%;
  height: 67px;
  left: 0px;
  top: 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #e8833a;
`;

const MoviesStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 40px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;
