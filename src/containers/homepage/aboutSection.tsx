import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { AboutComponent } from "../../components/aboutComponent";
import SnowmanImg from "../../assets/15.png";
import BiathalonImg from "../../assets/18.png";
import AlienImg from "../../assets/12.png";
import Fade from 'react-reveal/Fade';


const ServiceContainer = styled(Element)`
  width: 100%;
  min-height: 300px;
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
    margin-block-end: 5em;

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
    @media screen and (min-width: 480px) and (max-width: 800px) {
        display: inline-block;
        align-items: center;

    }
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
    font-size: 32px;
  }
`;

export function AboutSection(props) {

    return (
      <ServiceContainer name="serviceSection">
      <ServiceFilter>
      <Title>WHAT ARE THE METAMORFANS?</Title>

      <Fade left>

     <CenterContainer>
      <ContentContainer>
      <AboutComponent
      title="UNIQUE NFTS"
      description="3,333 Unique Metamorfan NFTs built on the Solana Blockchain"
      imageUrl={ BiathalonImg }

      />
      <AboutComponent
      title="WIDE RANGE"
      description="The Metamorfans will include over 100+ attributes with more than 15,000,000 possible visual permutations"
      imageUrl={ SnowmanImg }

      />
      <AboutComponent
      title="MORPHING"
      description="Ownership of a Metamorfan NFT gives you access to “morph” into future competitions, events and drops"
      imageUrl={ AlienImg }

      />
      </ContentContainer>
      </CenterContainer>
      </Fade>
      </ServiceFilter>
      </ServiceContainer>
  
    );
  
  }