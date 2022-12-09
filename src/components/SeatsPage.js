import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Seats from "./Seats";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SeatsPage({
  nome,
  setNome,
  cpf,
  setCPF,
  handleForm,
  hourFooter,
  weekdayFooter,
  seats,
  setSeats,
  seatsSelected,
  setSeatsSelected,
  seatsName,
  setSeatsName,
}) {
  const { sectionId } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sectionId}/seats`;
    const promise = axios.get(URL);
    promise.then((res) => setSeats(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  if (seats === undefined) {
    return;
  }

  function handleSeat(seat) {
    if (seatsSelected.includes(seat.id)) {
      const filteredSeats = seatsSelected.filter((s) => s !== seat.id);
      setSeatsSelected([...filteredSeats]);
    } else {
      setSeatsSelected([...seatsSelected, seat.id]);
    }

    if (seatsName.includes(seat.name)) {
      const filteredSeats = seatsName.filter((s) => s !== seat.name);
      setSeatsName([...filteredSeats]);
    } else {
      setSeatsName([...seatsName, seat.name]);
    }

    console.log(seatsName);
  }
  return (
    <SeatsContainerStyle>
      <p>Selecione o(s) assento(s)</p>

      {seats.seats.map((seat) => (
        <Seats
          key={seat.id}
          seat={seat}
          handleSeat={handleSeat}
          seatsSelected={seatsSelected}
        />
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
            <Link to="/success">
              <button> Reservar assento(s)</button>
            </Link>
          </ButtonReserveStyle>
        </form>
      </InputsContainerStyle>

      <ChoosedMovieStyle>
        <ImageBorderStyle2>
          <img src={seats.movie.posterURL} alt="" />
        </ImageBorderStyle2>
        <InfoMovie>
          <p>{seats.movie.title}</p>
          <p>
            {weekdayFooter} - {hourFooter}
          </p>
        </InfoMovie>
      </ChoosedMovieStyle>
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

// const ButtonSeatStyleDisponivel = styled.button`
//   cursor: pointer;
//   width: 26px;
//   height: 26px;
//   margin-top: 5px;
//   background: ${(props) => props.colorSeat};
//   border: 1px solid
//     ${(props) => (props.colorSeat === "#1aae9e" ? "#0e7d71" : "#7b8b99")};
//   border-radius: 12px;
// `;

// const ButtonSeatStyleIndisponivel = styled.button`
//   cursor: pointer;
//   width: 26px;
//   height: 26px;
//   margin-top: 5px;
//   background: #fbe192;
//   border: 1px solid #f7c52b;
//   border-radius: 12px;
// `;

// const PerguntaFechadaStyled = styled.div`
//   cursor: ${(props) => props.perguntaStyle === "#333333" && "pointer"};
//   pointer-events: ${(props) =>
//     props.perguntaStyle === "#333333" ? "all" : "none"};
//   width: 300px;
//   height: 35px;
//   background-color: #ffffff;
//   margin: 12px;
//   padding: 15px;
//   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   p {
//     font-family: "Recursive";
//     font-style: normal;
//     font-weight: 900;
//     font-size: 16px;
//     line-height: 19px;
//     color: ${(props) => props.perguntaStyle};
//     text-decoration: ${(props) =>
//       props.perguntaStyle !== "#333333" ? "line-through" : "none"};
//   }
// `;

const ButtonsLegendStyle = styled.div`
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
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  color: #293845;
`;

const ImageBorderStyle2 = styled.div`
  width: 64px;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  img {
    width: 48px;
    height: 72px;
  }
`;

const InfoMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  p {
    text-align: left;
  }
`;
