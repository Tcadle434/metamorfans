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
    text-align: center;

    @media screen and (max-width: 480px) {
        background-size: cover;
        margin-block-end: 10em;

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
          <SloganText>THEY WIN. YOU WIN.</SloganText>
      </BackgroundContainer>
    </TopContainer>
  </Element>
  );
}