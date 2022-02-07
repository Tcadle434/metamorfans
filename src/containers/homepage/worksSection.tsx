import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { WinningComponentTwo } from "../../components/winningComponent";
import BobsledImg from "../../assets/jam.jpg";
import Fade from 'react-reveal/Fade';

const WinningContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: auto;
  margin-block-start: 1.2em;
  margin-block-end: 1.2em;
  @media screen and (min-width: 900px) and (max-width: 1420px) {
    width: 80%;
  }
    @media screen and (max-width: 900px) {
      align-items: center;
      justify-content: center;
      display: inline-block;
      width: 90%;
      margin: auto;
      text-align: center;
  }
`;


const Title = styled.h2`
  color: #FFFFFF;
  font-family: Unisect-Black;
  font-size: 50px;
  margin-block-start: 3em;
  margin-block-end: 2em;
  line-height: 55px;
  @media screen and (max-width: 900px) {
    text-align: center;
    font-size: 32px;
    margin-block-start: 1.2em;
    margin-block-end: 0em;

  }
`;



export function WorksSection(props) {

  return (
    <WinningContainer name="aboutSection">

    <ContentContainer>
    <Title>ABOUT</Title>
    <Fade>
    <WinningComponentTwo
    description="
    The Metamorfan League is an ongoing series of NFT drops modeled around digital athletes, competitors and entertainers that will kick off with a collection of 3,333 Winter Sports Champions"
    descriptionOne="The first Metamorfans will be publicly minted in the coming weeks and will include attributes and other rarities that pay homage to winter games and its competitors"

    imageUrl={BobsledImg}
    />
    </Fade>
    </ContentContainer>
    </WinningContainer>

  );

}
