import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/Generic_Blend_Style.png";
import { OurNavbar } from "../../components/navbar";
import { Element } from "react-scroll";
import { ColoredLine } from "../../components/line";

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
    filter: brightness(70%);
    text-align: center;

    @media screen and (max-width: 480px) {
        
    }
`;

const SloganText = styled.h1`
  font-family: Unisect-Black;
  font-size: 90px;
  font-weight: 800;
  color: #0286c3;
  text-align: center;
  filter: brightness(150%);
  margin-block-start: 3em;
  margin-block-end: 0.2em;

  @media screen and (max-width: 480px) {
    font-size: 40px;
}

`;

const SubText = styled.h2`
  font-family: Share Tech Mono;
  font-size: 28px;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 16px;
}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 760px;
`;

const LandingImg = styled.img`
    align-items: center;
    filter: brightness(60%);
`;

interface Props {
  small: boolean;
}

const styles = {
    blue: {color: '#0286c3'},
    green: {color: '#168c39'}
};

export function TopSection(props) {

  return(
  <Element name="topSection">
    <TopContainer>
      <OurNavbar />
      <ColoredLine /> 
      <BackgroundContainer>
          <SloganText>THEY WIN. <span style={styles.green}>YOU WIN.</span></SloganText>
      </BackgroundContainer>
    </TopContainer>
  </Element>
  );
}