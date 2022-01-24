import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";


const ServiceContainer = styled(Element)`
  width: 100%;
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
    margin-block-start: 5em;

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


const Title = styled.h2`
  color: #FFFFFF;
  font-family: Unisect-Black;
  font-size: 50px;
  margin-block-start: 1em;
  margin-block-end: 2em;
  line-height: 55px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`;


export function ThreeSection(props) {

    const modelPath =
    "https://raw.githubusercontent.com/Tcadle434/metamorfans/main/src/assets/hockey_guy_in_winter.gltf";
    
    return (
      <ServiceContainer name="serviceSection">
      <ServiceFilter>
      <Title>THREE DIMENSIONAL ART</Title>
      <CenterContainer>
      <div>
        <GLTFModel src={modelPath}  
        height={window.innerHeight - 200}
        width={window.innerWidth}
        position={{ x: 0, y: 7, z: 3 }}
        >
          <AmbientLight color={0xffffff} />
          <DirectionLight
            color={0xffffff}
            position={{ x: 100, y: 300, z: 100 }}
          />
          <DirectionLight
            color={0x000000}
            position={{ x: -100, y: 200, z: -100 }}
          />
          
        </GLTFModel>
      </div>
      </CenterContainer>
      </ServiceFilter>
      </ServiceContainer>
  
    );
  
  }