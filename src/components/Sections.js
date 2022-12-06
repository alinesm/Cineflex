import React from "react";
import styled from "styled-components";
import Section from "./Section";

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

function Sections() {
  return (
    <>
      <SectionsContainerStyle>
        {sections[0].days.map((s, i) => (
          <Section weekday={s.weekday} date={s.date} showtimes={s.showtimes} />
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
