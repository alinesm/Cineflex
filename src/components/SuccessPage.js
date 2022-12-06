import React from "react";
import styled from "styled-components";

function SuccessPage({ nome, cpf }) {
  return (
    <SucessContainerStyle>
      <MessageStyle>Pedido feito com sucesso!</MessageStyle>
      <p>Filme e sessão</p>
      <p>Ingressos</p>
      <p>Comprador</p>
      {nome}
      {cpf}
      <ButtonReserveStyle>Voltar pra Home</ButtonReserveStyle>
    </SucessContainerStyle>
  );
}

export default SuccessPage;

const MessageStyle = styled.div`
  width: 150px;
  padding-top: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: auto;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #247a6b;
`;

const SucessContainerStyle = styled.div`
  p {
    margin-top: 30px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
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
