import React from "react";
import styled from "styled-components";

function Movie({ movieImage, id, MovieClicked }) {
  return (
    <MovieContainerStyle onClick={() => MovieClicked(id)}>
      <ImageStyle>
        <img src={movieImage} alt="" />
      </ImageStyle>
    </MovieContainerStyle>
  );
}

export default Movie;

const MovieContainerStyle = styled.div``;

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
