import React from "react";
import styled from "styled-components";
import Movies from "./Movies";

function Home({ listMovies, MovieClicked }) {
  return (
    <MoviesStyle>
      <p>Selecione o filme</p>
      <Movies listMovies={listMovies} MovieClicked={MovieClicked} />
    </MoviesStyle>
  );
}

export default Home;

const MoviesStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 40px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;
