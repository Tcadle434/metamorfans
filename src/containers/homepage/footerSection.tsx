import React from "react";
import styled from "styled-components";
import TwitterImg from "../../assets/twitter.png";
import DiscordImg from "../../assets/discord.png";

const FooterContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0286c3;
  @media screen and (max-width: 480px) {
    height: 85px;
}
  `;

const BrandContainer = styled.div`
  margin-left: 5%;
`;


const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 4%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const NameText = styled.p`
    font-family: Unisect-Black;
    font-size: 20px;
    color: #FFFFFF;
`;

const FooterText = styled.p`
    font-family: SanFranciscoText-Regular!important;
    font-size: 18px!important;
    color: #FFFFFF;

`;

const SocialMediaImg = styled.img`
  width: 2m;
  height: 1.5em;
  margin: 20px;
  @media screen and (max-width: 480px) {
    width: 1.2m;
    height: 1em;
    margin: 10px;

}
`;

export function FooterSection(props) {

    return (
      <FooterContainer>
      <BrandContainer> 
        <TextContainer>
            <NameText>THE <br />METAMORFAN <br />LEAGUE</NameText>
            <FooterText>© 2022 Metamorfan League LLC. All rights reserved. <br />Terms and Conditions · Privacy Policy</FooterText>
        </TextContainer>
      </BrandContainer>

      <AccessibilityContainer>
      <a href = "https://twitter.com/metamorfans">
            <SocialMediaImg src={TwitterImg} />
        </a>
        <a href = "https://discord.gg/C4BPRXvdYr">
            <SocialMediaImg src={DiscordImg} />
        </a>
      </AccessibilityContainer>
      </FooterContainer>
  
    );
  
  }