import React from "react";
import styled from "styled-components";

function Seats({ seat, handleSeat, colorSeat, selectedSeat }) {
  return (
    <>
      {seat.isAvailable ? (
        <ButtonSeatStyleDisponivel
          colorSeat={colorSeat}
          onClick={() => handleSeat(seat)}
        >
          {seat.name}
        </ButtonSeatStyleDisponivel>
      ) : (
        <ButtonSeatStyleIndisponivel colorSeat={colorSeat}>
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
  /* background: ${(props) => (props.selectedSeat ? "green" : "gray")}; */
  background: ${(props) => props.colorSeat};
  border: 1px solid
    ${(props) => (props.colorSeat === "#1aae9e" ? "#0e7d71" : "#7b8b99")};
  border-radius: 12px;
`;

const ButtonSeatStyleIndisponivel = styled.button`
  cursor: pointer;
  width: 26px;
  height: 26px;
  margin-top: 5px;
  background: #fbe192;
  border: 1px solid #f7c52b;
  border-radius: 12px;
`;
