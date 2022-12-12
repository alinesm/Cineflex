import { useState } from "react";
import styled from "styled-components";
import SuccessPage from "./SuccessPage";
import SeatsPage from "./SeatsPage";
import ChooseSectionPage from "./ChooseSectionPage";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [typedName, setTypedName] = useState("");
  const [typedCPF, setTypeCPF] = useState("");
  const [hourFooter, setHourFooter] = useState("");
  const [weekdayFooter, setWeekdayFooter] = useState("");
  const [sectionDate, setSectionDate] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  const [sections, setSections] = useState(undefined);
  const [seats, setSeats] = useState(undefined);
  const [listMovies, setListMovies] = useState(undefined);

  const [seatsSelected, setSeatsSelected] = useState([]);
  const [seatsName, setSeatsName] = useState([]);
  const [listNames, setListNames] = useState([]);

  function handleForm(e) {
    e.preventDefault();
    setTypedName(nome);
    setTypeCPF(cpf);

    const listSeatsIdsSuccess = [...seatsSelected];

    const names = [...seatsName];
    setListNames(names);

    const sendData = { ids: listSeatsIdsSuccess, name: nome, cpf: cpf };
    const url_post =
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    const promise = axios.post(url_post, sendData);
    promise.then((res) => {
      console.log(res.data);
    });
    promise.catch((err) => console.log(err.response.data));

    setNome("");
    setCPF("");
    setSeatsSelected([]);
    setSeatsName([]);
  }

  return (
    <BrowserRouter>
      <MasterContainerStyle>
        <HeaderStyle>CINEFLEX</HeaderStyle>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                setMovieTitle={setMovieTitle}
                listMovies={listMovies}
                setListMovies={setListMovies}
              />
            }
          />
          <Route
            path="/sessoes/:movieId"
            element={
              <ChooseSectionPage
                setWeekdayFooter={setWeekdayFooter}
                setHourFooter={setHourFooter}
                setSectionDate={setSectionDate}
                sections={sections}
                setSections={setSections}
              />
            }
          />
          <Route
            path="/assentos/:sectionId"
            element={
              <SeatsPage
                nome={nome}
                setNome={setNome}
                cpf={cpf}
                setCPF={setCPF}
                handleForm={handleForm}
                hourFooter={hourFooter}
                weekdayFooter={weekdayFooter}
                seatsData={seats}
                seats={seats}
                setSeats={setSeats}
                seatsSelected={seatsSelected}
                setSeatsSelected={setSeatsSelected}
                seatsName={seatsName}
                setSeatsName={setSeatsName}
              />
            }
          />
          <Route
            path="/success"
            element={
              <SuccessPage
                typedName={typedName}
                typedCPF={typedCPF}
                movieTitle={movieTitle}
                hourFooter={hourFooter}
                sectionDate={sectionDate}
                seatsName={seatsName}
                listNames={listNames}
              />
            }
          />
        </Routes>
      </MasterContainerStyle>
    </BrowserRouter>
  );
}

export default App;

const MasterContainerStyle = styled.div`
  width: 375px;
  height: 100%;
  min-height: 100vh;
  /* margin: auto; */
  background-color: white;
`;

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
