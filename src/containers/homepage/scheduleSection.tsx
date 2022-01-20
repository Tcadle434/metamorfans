import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { AboutComponent } from "../../components/aboutComponent";
import CharacterImg from "../../assets/sample-character.jpeg";
import Fade from 'react-reveal/Fade';


const ServiceContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  height: 1000px;

`;

const ServiceFilter = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-block-end: 10em;
    width: 75%;
    margin: auto;
    margin-block-start: 5em;

    @media screen and (max-width: 480px) {
      margin-block-end: 0.5em;
  
  }
`;

const CenterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 480px) {
        display: inline-block;
    
    }
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-family: Unisect-Black;
  font-size: 50px;
  margin-block-start: 1em;
  margin-block-end: 2em;
  line-height: 55px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`;

export function ScheduleSection(props) {

    return (
      <ServiceContainer name="serviceSection">
      <ServiceFilter>
      <Title>SCHEDULE</Title>

      </ServiceFilter>
      </ServiceContainer>
  
    );
  
  }