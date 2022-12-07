import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Sections({
  setWeekdayFooter,
  setHourFooter,
  sections,
  setSectionDate,
}) {
  return (
    <>
      <SectionsContainerStyle>
        {sections[0].days.map((s, i) => (
          <Section
            weekday={s.weekday}
            date={s.date}
            showtimes={s.showtimes}
            setWeekdayFooter={setWeekdayFooter}
            setHourFooter={setHourFooter}
            setSectionDate={setSectionDate}
          />
        ))}
      </SectionsContainerStyle>
      <ChoosedMovieStyle>
        <ImageBorderStyle>
          <img src={sections[0].posterURL} alt="" />
        </ImageBorderStyle>
        {/* <InfoMovie> */}
        <p>{sections[0].title} </p>
        {/* </InfoMovie> */}
      </ChoosedMovieStyle>
    </>
  );
}

export default Sections;

const SectionsContainerStyle = styled.div``;

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
    font-size: 26px;
    display: flex;
    align-items: center;
    color: #293845;
    padding-bottom: 20px;
    margin-left: 10px;
  }
`;

const ImageBorderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 89px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  img {
    width: 48px;
    height: 72px;
  }
`;

const InfoMovie = styled.div`
  /* display: flex;
  flex-direction: column;
  margin: 10px; */
  p {
    margin: auto;
  }
`;
