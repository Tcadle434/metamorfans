import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { WinningComponent } from "../../components/winningComponent";
import RareImg from "../../assets/ski_rare.png";
import Fade from 'react-reveal/Fade';

const WinningContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0286c3;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 65%;
  margin: auto;
  margin-block-start: 1.2em;
  margin-block-end: 1.2em;
  @media screen and (min-width: 480px) and (max-width: 1420px) {
    width: 80%;

  }
    @media screen and (max-width: 480px) {
      align-items: center;
      justify-content: center;
      display: inline-block;
      width: 90%;
  }
`;


export function WinningSection(props) {

  return (
    <WinningContainer name="aboutSection">
    <Fade top >
    <ContentContainer>
    <WinningComponent
    title= "CLAIM YOUR WINTER SPORTS CHAMPION"
    description="Unlock rarity, prizes and access to future competitions"
    imageUrl={RareImg}
    />

    </ContentContainer>
    </Fade>
    </WinningContainer>

  );

}
