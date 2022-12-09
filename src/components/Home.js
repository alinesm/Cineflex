import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home({ listMovies, setListMovies, setMovieTitle }) {
  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(URL);
    promise.then((res) => setListMovies(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  if (listMovies === undefined) {
    return <div>Carregando...</div>;
  }
  // console.log(listMovies);

  function MovieClicked(title) {
    setMovieTitle(title);
  }
  return (
    <MoviesStyle>
      <p>Selecione o filme</p>
      <MoviesContainerStyle>
        {listMovies.map((m) => (
          <Link to={`/sections/${m.id}`}>
            <ImageStyle onClick={() => MovieClicked(m.title)}>
              <img src={m.posterURL} alt="" />
            </ImageStyle>
          </Link>
        ))}
      </MoviesContainerStyle>
    </MoviesStyle>
  );
}

export default Home;

const MoviesContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const MoviesStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
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

const ImageStyle = styled.div`
  cursor: pointer;
  width: 145px;
  height: 209px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  img {
    width: 129px;
    height: 193px;
  }
`;
