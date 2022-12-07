import React, { useState } from "react";
import styled from "styled-components";

function Showtimes({
  time,
  weekday,
  date,
  setWeekdayFooter,
  setHourFooter,
  setSectionDate,
}) {
  function timeClicked() {
    setHourFooter(time);
    setWeekdayFooter(weekday);
    setSectionDate(date);
  }
  return (
    <ButtonsStyle onClick={timeClicked}>
      <button>{time}</button>
    </ButtonsStyle>
  );
}

export default Showtimes;

const ButtonsStyle = styled.div`
  button {
    cursor: pointer;
    width: 83px;
    height: 43px;
    border: none;
    background: #e8833a;
    border-radius: 3px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.02em;
    margin-right: 20px;

    color: #ffffff;
  }
`;
