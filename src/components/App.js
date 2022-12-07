import { useEffect, useState } from "react";
import styled from "styled-components";
import SuccessPage from "./SuccessPage";
import Movies from "./Movies";
import SeatsPage from "./SeatsPage";
import ChooseSectionPage from "./ChooseSectionPage";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import axios from "axios";

const sections = [
  {
    id: 1,
    title: "2067",
    posterURL:
      "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    overview:
      "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
    releaseDate: "2020-10-01T00:00:00.000Z",
    days: [
      {
        id: 24062021,
        weekday: "Q",
        date: "24/06/2021",
        showtimes: [
          {
            name: "15:00",
            id: 1,
          },
          {
            name: "19:00",
            id: 2,
          },
        ],
      },
      {
        id: 25062021,
        weekday: "S",
        date: "25/06/2021",
        showtimes: [
          {
            name: "15:00",
            id: 3,
          },
          {
            name: "19:00",
            id: 4,
          },
        ],
      },
      {
        id: 26062021,
        weekday: "Sáb",
        date: "26/06/2021",
        showtimes: [
          {
            name: "15:00",
            id: 5,
          },
          {
            name: "19:00",
            id: 6,
          },
        ],
      },
      {
        id: 27062021,
        weekday: "Dom",
        date: "27/06/2021",
        showtimes: [
          {
            name: "15:00",
            id: 7,
          },
          {
            name: "19:00",
            id: 8,
          },
        ],
      },
      {
        id: 28062021,
        weekday: "Seg",
        date: "28/06/2021",
        showtimes: [
          {
            name: "15:00",
            id: 9,
          },
          {
            name: "19:00",
            id: 10,
          },
        ],
      },
      {
        id: 29062021,
        weekday: "Ter",
        date: "29/06/2021",
        showtimes: [
          {
            name: "15:00",
            id: 11,
          },
          {
            name: "19:00",
            id: 12,
          },
        ],
      },
      {
        id: 30062021,
        weekday: "Qua",
        date: "30/06/2021",
        showtimes: [
          {
            name: "15:00",
            id: 13,
          },
          {
            name: "19:00",
            id: 14,
          },
        ],
      },
      {
        id: 1072021,
        weekday: "Quint",
        date: "01/07/2021",
        showtimes: [
          {
            name: "15:00",
            id: 15,
          },
          {
            name: "19:00",
            id: 16,
          },
          {
            name: "19:00",
            id: 16,
          },
        ],
      },
    ],
  },
];

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [typedName, setTypedName] = useState("");
  const [typedCPF, setTypeCPF] = useState("");
  const [listMovies, setListMovies] = useState(null);
  const [hourFooter, setHourFooter] = useState("");
  const [weekdayFooter, setWeekdayFooter] = useState("");
  const [sectionDate, setSectionDate] = useState("");

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(URL);
    promise.then((res) => setListMovies(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  if (listMovies === null) {
    return <div>Carregando...</div>;
  }

  function handleForm(e) {
    e.preventDefault();
    setTypedName(nome);
    setTypeCPF(cpf);
  }

  function MovieClicked(id) {
    console.log(id);
  }

  return (
    // <Router>
    <MasterContainerStyle>
      <HeaderStyle>CINEFLEX</HeaderStyle>

      {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}

      {/* <Home listMovies={listMovies} MovieClicked={MovieClicked} /> */}
      {/* <ChooseSectionPage
        setWeekdayFooter={setWeekdayFooter}
        setHourFooter={setHourFooter}
        setSectionDate={setSectionDate}
        sections={sections}
      /> */}
      <SeatsPage
        nome={nome}
        setNome={setNome}
        cpf={cpf}
        setCPF={setCPF}
        handleForm={handleForm}
        hourFooter={hourFooter}
        weekdayFooter={weekdayFooter}
        movieTitle={sections[0].title}
        movieImage={sections[0].posterURL}
      />
      {/* <SuccessPage
        nome={nome}
        cpf={cpf}
        typedName={typedName}
        typedCPF={typedCPF}
        movieTitle={sections[0].title}
        hourFooter={hourFooter}
        sectionDate={sectionDate}
      /> */}
    </MasterContainerStyle>
    // </Router>
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
