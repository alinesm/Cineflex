import React from "react";
import styled from "styled-components";

function SeatsPage({ nome, setNome, cpf, setCPF, handleForm }) {
  let array = [];
  for (let i = 1; i <= 50; i++) {
    array.push(i);
  }
  return (
    <SeatsContainerStyle>
      <p>Selecione o(s) assento(s)</p>
      {array.map((i) => (
        <SeatsStyle>
          <button>{i}</button>
        </SeatsStyle>
      ))}
      <ButtonsLegendStyle>
        <button />
        <button />
        <button />
        <SpansContainer>
          <span>Selecionado</span>
          <span>Disponível</span>
          <span>Indisponível</span>
        </SpansContainer>
      </ButtonsLegendStyle>

      <InputsContainerStyle>
        <p>Nome do comprador</p>
        <form>
          <input
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            type="text"
            placeholder="Digite seu nome..."
          />
          <p> CPF do comprador</p>
          <input
            onChange={(e) => setCPF(e.target.value)}
            value={cpf}
            type="number"
            placeholder="Digite seu CPF..."
          />
          <ButtonReserveStyle onClick={handleForm}>
            Reservar assento(s)
          </ButtonReserveStyle>
        </form>
      </InputsContainerStyle>

      <ChoosedMovieStyle />
    </SeatsContainerStyle>
  );
}

export default SeatsPage;

const SeatsContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  p {
    /* margin: 20px 0; */
    width: 100%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
`;

const SeatsStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  button {
    width: 26px;
    height: 26px;
    margin-top: 5px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
  }
`;

const ButtonsLegendStyle = styled.div`
  /* margin: auto; */
  margin-top: 15px;
  button {
    margin-left: 40px;
    width: 25px;
    height: 25px;
    border-radius: 17px;
    &:nth-child(1) {
      background: #1aae9e;
      border: 1px solid #0e7d71;
      margin-right: 30px;
    }
    &:nth-child(2) {
      background: #c3cfd9;
      border: 1px solid #7b8b99;
      margin-right: 30px;
    }
    &:nth-child(3) {
      background: #fbe192;
      border: 1px solid #f7c52b;
    }
  }
`;

const SpansContainer = styled.div`
  display: flex;
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    margin: 10px 20px;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;

const InputsContainerStyle = styled.div`
  input {
    width: 327px;
    margin-top: 5px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    &::placeholder {
      padding-left: 10px;
      font-family: "Roboto";
      font-style: italic;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;

      color: #afafaf;
    }
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;
    margin-top: 10px;
  }
`;

const ButtonReserveStyle = styled.div`
  margin-top: 20px;
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
`;

const ChoosedMovieStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 117px;
  left: 0px;
  bottom: 0px;
  margin-top: 20px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  padding: 12px 10px 0 10px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    display: flex;
    align-items: center;
    color: #293845;
    padding-bottom: 20px;
    margin-left: 10px;
  }
`;
