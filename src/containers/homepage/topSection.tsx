import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/Generic_Blend_Style_Legal.png";
import { OurNavbar } from "../../components/navbar";
import { Element } from "react-scroll";
import { ColoredLine } from "../../components/line";
import Fade from 'react-reveal/Fade';

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  @media screen and (max-width: 480px) {
      
}
`;

const BackgroundContainer = styled.div`
    background-image: url(${BackgroundImg});
    background-size: cover;
    height: 45em;
    width: 80em;
    text-align: center;

    @media screen and (min-width: 1200px) and (max-width: 1440px) {
      width: 100%;
    }
    @media screen and (min-width: 480px) and (max-width: 1200px) {
      width: 100%;
    }

    @media screen and (max-width: 480px) {
        max-width: 100%;
        margin-block-end: 5em;
        align-items: center;
    }
`;

const SloganText = styled.h1`
  font-family: Unisect-Black;
  font-size: 120px;
  font-weight: 800;
  color: #49fb35;
  text-align: center;
  margin-block-start: 2em;
  margin-block-end: 0.2em;

  @media screen and (max-width: 480px) {
    font-size: 34px;
    margin-block-start: 8em;

}

`;


export function TopSection(props) {

  return(
  <Element name="topSection">
    <TopContainer>
      <OurNavbar />
      <ColoredLine /> 
      <BackgroundContainer>
      <Fade>
          <SloganText>THEY WIN. YOU WIN.</SloganText>
          </Fade>
      </BackgroundContainer>
    </TopContainer>
  </Element>
  );
}