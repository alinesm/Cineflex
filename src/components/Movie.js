import React from "react";
import styled from "styled-components";

function Movie({ movieImage, id }) {
  function MovieClicked(id) {
    console.log(id);
  }

  return (
    <MovieContainerStyle onClick={() => MovieClicked(id)}>
      <ImageStyle>
        <img src={movieImage} alt="" />
      </ImageStyle>
    </MovieContainerStyle>
  );
}

export default Movie;

const MovieContainerStyle = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  background-color: yellow;
`;

const ImageStyle = styled.div`
  width: 145px;
  height: 209px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  /* margin: 0 10px 10px 0; */
  img {
    width: 129px;
    height: 193px;
  }
`;
