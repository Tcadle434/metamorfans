import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import Fade from 'react-reveal/Fade';


const ServiceContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  

`;

const ServiceFilter = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-block-end: 10em;
    width: 75%;
    margin: auto;
    margin-block-start: 5em;
    margin-block-end: 5em;

    @media screen and (max-width: 480px) {
  
  }
`;

const CenterContainer = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;


const Details = styled.p`
  color: #FFFFFF;
  font-family: SanFranciscoText-Regular;
  font-size: 32px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 16px;
}
`;


export function ScheduleSection(props) {
    
    return (
      <ServiceContainer name="serviceSection">
      <ServiceFilter>

      <Fade>
      <CenterContainer>

        <Details> It is impossible to tell what competitions the Metamorfans will visit next given health regulations around the world, but they do have tons of frequent flier miles </Details>
        <Details> If the world is watching, we’ll be competing </Details>
        <Details> Event #1: The International Winter Sports Games in BEIJING</Details>

      </CenterContainer>
      </Fade>

      </ServiceFilter>
      </ServiceContainer>
  
    );
  
  }