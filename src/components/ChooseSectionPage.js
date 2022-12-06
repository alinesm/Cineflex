import React from "react";
import styled from "styled-components";
import Sections from "./Sections";

function ChooseSectionPage() {
  return (
    <ChooseSectionStyle>
      <p>Selecione o horário</p>
      <Sections />
    </ChooseSectionStyle>
  );
}

export default ChooseSectionPage;

const ChooseSectionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin: 20px 0; */
  p {
    /* margin: 20px 0; */
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
