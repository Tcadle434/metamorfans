import React from "react";
import styled from "styled-components/macro";



const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 3em;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    display: inline-block;
    align-items: center;
}
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;


  @media screen and (max-width: 480px) {
    display: inline-block;
    align-items: center;
}
`;

const ServiceContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media screen and (max-width: 480px) {
    display: inline-block;
    align-items: center;
}
`;

const ServiceContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 480px) {
    margin-block-start: 2em;
    align-items: center;
    text-align: center;
}
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
  }
`;

const DescriptionContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  @media screen and (max-width: 480px) {
      width: 85%;
      margin: auto;
  }
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-family: Unisect-Black;
  font-size: 100px;
  margin-block-start: 0.1em;
  margin-block-end: 0.3em;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`;

const SmallerTitle = styled.h2`
  color: #FFFFFF;
  font-family: Unisect-Black;
  font-size: 50px;
  margin-block-start: 0.1em;
  margin-block-end: 0.3em;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`;

const Details = styled.p`
  color: #FFFFFF;
  font-family: SanFranciscoText-Regular;
  font-size: 20px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
}
`;

const Img = styled.img`
  height: 30em;
  width: 30em;
  border-radius: 20px!important;

  @media screen and (max-width: 480px) {
    height: 19em;
    width: 19em;
    margin: auto;
}
`;


export function WinningComponent(props) {
const {title, description, imageUrl } = props;

  return (
    <RowContainer>
    <ServiceContainer >
        <DescriptionContainer>
          <Title> {title} </Title>
          <Details> {description} </Details>
        </DescriptionContainer>
    </ServiceContainer>
    <ServiceContainerTwo>
    <Img src ={imageUrl} />
    </ServiceContainerTwo>
    </RowContainer>
  );

}

export function WinningComponentTwo(props) {
    const { description, descriptionOne, descriptionTwo, descriptionThree, descriptionFour, imageUrl } = props;

    return (
        <RowContainer>
        <ServiceContainerThree >
            <DescriptionContainerTwo>
              <Details> {description} </Details>
              <Details> {descriptionOne} </Details>
              <Details> {descriptionTwo} </Details>
              <Details> {descriptionThree} </Details>
              <Details> {descriptionFour} </Details>
            </DescriptionContainerTwo>
        </ServiceContainerThree>
        <ServiceContainerThree>
        <Img src ={imageUrl} />
        </ServiceContainerThree>
        </RowContainer>
      );
    
    }