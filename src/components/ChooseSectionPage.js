import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Section from "./Section";

function ChooseSectionPage({
  setWeekdayFooter,
  setHourFooter,
  setSectionDate,
  sections,
  setSections,
}) {
  const { movieId } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`
    );
    promise.then((res) => setSections(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  if (sections === undefined) {
    return;
  }

  // console.log(sections);

  return (
    <ChooseSectionStyle>
      <p>Selecione o horário</p>
      <SectionsContainerStyle>
        {sections.days.map((s) => (
          <Section
            key={s.id}
            id={s.id}
            weekday={s.weekday}
            date={s.date}
            showtimes={s.showtimes}
            setWeekdayFooter={setWeekdayFooter}
            setHourFooter={setHourFooter}
            setSectionDate={setSectionDate}
          />
        ))}
      </SectionsContainerStyle>
      <ChoosedMovieStyle data-test="footer">
        <ImageBorderStyle>
          <img src={sections.posterURL} alt="" />
        </ImageBorderStyle>
        <p>{sections.title} </p>
      </ChoosedMovieStyle>
    </ChooseSectionStyle>
  );
}

export default ChooseSectionPage;

const ChooseSectionStyle = styled.div`
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin-top: 30px;
    background-color: blue;
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

const SectionsContainerStyle = styled.div`
  background-color: green;
  /* padding: 0 20px; */
  left: 0;
  p {
    margin: 20px 0 10px 0;
    background-color: yellow;
  }
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
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    display: flex;
    text-align: left;
    color: #293845;
    padding-bottom: 20px;
    margin-left: 10px;
    justify-content: center;
  }
`;

const ImageBorderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 89px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  img {
    width: 50px;
    height: 72px;
  }
`;
