import React from "react";
import styled from "styled-components";
import Showtimes from "./Showtimes";

function Section({
  weekday,
  date,
  showtimes,
  setWeekdayFooter,
  setHourFooter,
  setSectionDate,
  // id,
}) {
  return (
    <SectionContainerStyle>
      <p>
        {weekday} - {date}{" "}
      </p>
      <TimeStyle>
        {showtimes.map((time) => (
          <Showtimes
            id={time.id}
            time={time.name}
            weekday={weekday}
            date={date}
            setWeekdayFooter={setWeekdayFooter}
            setHourFooter={setHourFooter}
            setSectionDate={setSectionDate}
          />
        ))}
      </TimeStyle>
    </SectionContainerStyle>
  );
}

export default Section;

const SectionContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #293845;
  }
`;

const TimeStyle = styled.div`
  display: flex;
`;
