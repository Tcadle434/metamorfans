import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { WinningComponentTwo } from "../../components/winningComponent";
import BobsledImg from "../../assets/bobsled.png";
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

const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-block-start: 0.1em;
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

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-family: Unisect-Black;
  font-size: 50px;
  margin-block-start: 3em;
  margin-block-end: 0em;
  line-height: 55px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`;



export function WorksSection(props) {

  return (
    <WinningContainer name="aboutSection">

    <ContentContainer>
    <Title>HOW IT WORKS</Title>
    <WinningComponentTwo
    title= "LET THE WINNING BEGIN"
    description="Users mint NFTs prior to a scheduled event selected by The Metamorfan International Committee"
    descriptionOne="During the real world event, if a competitor wins a game or award, so does your Metamorfan NFT"
    descriptionTwo="Medals awarded will be considered an attribute and will increase the rarity of your NFT"
    descriptionThree="A daily leaderboard will be published announcing the holders with the most medals"
    descriptionFour="Prizes will be awarded to the top medal holders in each
    of the 15 sports disciplines and the three holders with the highest overall medal count at the conclusion of the games"
    imageUrl={BobsledImg}
    />
    </ContentContainer>
    </WinningContainer>

  );

}
