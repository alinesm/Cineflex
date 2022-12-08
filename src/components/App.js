import { useEffect, useState } from "react";
import styled from "styled-components";
import SuccessPage from "./SuccessPage";
import Movies from "./Movies";
import SeatsPage from "./SeatsPage";
import ChooseSectionPage from "./ChooseSectionPage";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
// import { sections } from "../mockData";
import { seats } from "../mockData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [typedName, setTypedName] = useState("");
  const [typedCPF, setTypeCPF] = useState("");
  const [hourFooter, setHourFooter] = useState("");
  const [weekdayFooter, setWeekdayFooter] = useState("");
  const [sectionDate, setSectionDate] = useState("");

  const [sections, setSections] = useState(undefined);
  const [seats, setSeats] = useState(undefined);
  const [listMovies, setListMovies] = useState(undefined);

  function handleForm(e) {
    e.preventDefault();
    setTypedName(nome);
    setTypeCPF(cpf);
  }

  function MovieClicked(id) {
    console.log(id);
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
                MovieClicked={MovieClicked}
                listMovies={listMovies}
                setListMovies={setListMovies}
              />
            }
          />
          <Route
            path="/sections/:movieId"
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
            path="/seats/:sectionId"
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
              />
            }
          />
          <Route
            path="/success"
            element={
              <SuccessPage
                nome={nome}
                cpf={cpf}
                typedName={typedName}
                typedCPF={typedCPF}
                // movieTitle={sections.title}
                hourFooter={hourFooter}
                sectionDate={sectionDate}
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
  margin: auto;
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
