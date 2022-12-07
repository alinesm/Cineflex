import { useState } from "react";
import styled from "styled-components";
import SuccessPage from "./SuccessPage";
import Movies from "./Movies";
import SeatsPage from "./SeatsPage";
import ChooseSectionPage from "./ChooseSectionPage";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [typedName, setTypedName] = useState("");
  const [typedCPF, setTypeCPF] = useState("");

  function handleForm(e) {
    e.preventDefault();
    setTypedName(nome);
    setTypeCPF(cpf);
  }

  return (
    // <Router>
    <MasterContainerStyle>
      <HeaderStyle>CINEFLEX</HeaderStyle>

      {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}

      {/* <Home /> */}
      {/* <ChooseSectionPage /> */}
      <SeatsPage
        nome={nome}
        setNome={setNome}
        cpf={cpf}
        setCPF={setCPF}
        handleForm={handleForm}
      />
      <SuccessPage
        nome={nome}
        cpf={cpf}
        typedName={typedName}
        typedCPF={typedCPF}
      />
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
