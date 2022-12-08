import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Movies({ listMovies, MovieClicked, sections, setSections }) {
  const { sectionsMovieId } = useParams();
  // const [sections, setSections] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${sectionsMovieId}/showtimes`
    );
    promise.then((res) => setSections(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);
  console.log(sections);

  return (
    <MoviesContainerStyle>
      {listMovies.map((m) => (
        <Movie
          key={m.id}
          movieImage={m.posterURL}
          id={m.id}
          MovieClicked={MovieClicked}
        />
      ))}
    </MoviesContainerStyle>
  );
}

export default Movies;

const MoviesContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
