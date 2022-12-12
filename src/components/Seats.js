import React, { useState } from "react";
import styled from "styled-components";

function Seats({ seat, handleSeat, seatsSelected }) {
  const [colorSeat, setColorSeat] = useState("#c3cfd9");

  return (
    <>
      {seat.isAvailable ? (
        <ButtonSeatStyleDisponivel
          data-test="seat"
          colorSeat={seatsSelected.includes(seat.id)}
          onClick={() => handleSeat(seat)}
        >
          {seat.name}
        </ButtonSeatStyleDisponivel>
      ) : (
        <ButtonSeatStyleIndisponivel
          data-test="seat"
          onClick={() => alert("Esse assento não está disponível")}
          colorSeat={colorSeat}
        >
          {seat.name}
        </ButtonSeatStyleIndisponivel>
      )}
    </>
  );
}

export default Seats;

const ButtonSeatStyleDisponivel = styled.button`
  cursor: pointer;
  width: 26px;
  height: 26px;
  margin-top: 5px;
  background: ${(props) => (props.colorSeat ? "#1aae9e" : " #c3cfd9")};
  border: 1px solid
    ${(props) => (props.colorSeat === "#1aae9e" ? "#0e7d71" : "#7b8b99")};
  border-radius: 12px;
`;

const ButtonSeatStyleIndisponivel = styled.button`
  width: 26px;
  height: 26px;
  margin-top: 5px;
  background: #fbe192;
  border: 1px solid #f7c52b;
  border-radius: 12px;
`;
