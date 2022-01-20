import React from "react";
import styled from "styled-components/macro";

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  text-align: center;
  width: 33%;
  @media screen and (max-width: 480px) {
    display: inline-block;
    width: 100%;
}
`;

const Title = styled.h3`
  color: #FFFFFF;
  font-family: Unisect-Black;
  font-size: 30px;
  margin-block-start: 0.1em;
  margin-block-end: 0.3em;
  line-height: 55px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`;

const Details = styled.p`
  color: #FFFFFF;
  font-family: SanFranciscoText-Regular;
  font-size: 20px;
  max-width: 100%;
  @media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: center;
    max-width: 100%;
}
`;

const DescriptionContainer = styled.div`
  width: 60%;
  margin: auto;
  height: 7em; 

  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    height: 12em;
  }
  @media screen and (min-width: 480px) and (max-width: 1200px) {
    height: 20em;
  }
 @media screen and (max-width: 480px) {
    display: inline-block;
}
`;

const Img = styled.img`
  height: 19em;
  width: 19em;
  border-radius: 20px!important;

`;


export function AboutComponent(props) {
  const { title, imageUrl, description } = props;
  
    return (
      <ServiceContainer >
            <Img src = {imageUrl} />
            <Title> {title} </Title>
            <DescriptionContainer>
            <Details> {description} </Details>
            </DescriptionContainer>
      </ServiceContainer>
    );
  
}
