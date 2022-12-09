import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SuccessPage({
  typedName,
  typedCPF,
  sectionDate,
  hourFooter,
  movieTitle,
  seatsSelected,
  setSeatsSelected,
  listSeatsSuccess,
}) {
  return (
    <SucessContainerStyle>
      <MessageStyle>Pedido feito com sucesso!</MessageStyle>
      <HeaderTitle>Filme e sessão</HeaderTitle>
      <Info>{movieTitle}</Info>
      <Info>
        {sectionDate} {hourFooter}
      </Info>
      <HeaderTitle>Ingressos</HeaderTitle>
      {listSeatsSuccess.map((s) => (
        <SeatsStyle>Assento {s}</SeatsStyle>
      ))}
      <HeaderTitle>Comprador</HeaderTitle>
      <Info>{typedName}</Info>
      <Info>{typedCPF}</Info>
      <Link to="/">
        <ButtonReserveStyle>Voltar pra Home</ButtonReserveStyle>
      </Link>
    </SucessContainerStyle>
  );
}

export default SuccessPage;

const SeatsStyle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #293845;
`;

const MessageStyle = styled.div`
  width: 170px;
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

const HeaderTitle = styled.p`
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
`;

const Info = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #293845;
`;

const SucessContainerStyle = styled.div``;

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
