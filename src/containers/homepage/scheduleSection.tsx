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
    @media screen and (max-width: 480px) {
      width: 90%;
    }
`;


const Details = styled.p`
  color: #FFFFFF;
  font-family: SanFranciscoText-Regular;
  font-size: 24px;
  margin-left: 15px;
  text-align: left;
  @media screen and (max-width: 480px) {
    font-size: 16px;
}
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-family: Unisect-Black;
  font-size: 50px;
  margin-block-start: 1em;
  margin-block-end: 1.5em;
  line-height: 55px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 32px;
  }
`;

const RoadList = styled.ol`
  color: #FFFFFF;
  font-size: 32px;

`;

export function ScheduleSection(props) {
    
    return (
      <ServiceContainer name="serviceSection">
      <ServiceFilter>
      <Title>IF THE WORLD IS WATCHING, WE’LL BE COMPETING</Title>
      <Fade>
      <CenterContainer>

      <RoadList>
        <li><Details>Throughout the year, The Metamorfan International Committee will schedule a number of global NFT drops that are creatively inspired by global competitors and entertainers</Details> </li>
        <li><Details>Ownership of a Metamorfan gives you first access to future Metamorfan League events and drops</Details> </li>
        <li><Details>We will develop a fantasy-style game that allows holders the ability to “morph” their Metamorphan NFTs into new, upgraded versions that retain virtual awards and metadata from one competition to another</Details> </li>
        <li><Details>In the future, Metamorfan League medals will be rewarded to Metamorfans NFTs based on the performance of their real-world counterparts. These medals will also be considered an attribute and may increase rarity and chances at prizes</Details> </li>
      </RoadList>

      </CenterContainer>
      </Fade>

      </ServiceFilter>
      </ServiceContainer>
  
    );
  
  }