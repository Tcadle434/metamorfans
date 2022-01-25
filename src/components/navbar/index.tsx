import React from "react";
import styled from "styled-components";
import TwitterImg from "../../assets/twitter.png";
import DiscordImg from "../../assets/discord.png";
import LogoImg from "../../assets/logo-center-white.png";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import {
    shortenAddress,
  } from "../../containers/homepage/candy-machine";


const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #000000;

  @media screen and (max-width: 480px) {
}
  `;

const BrandContainer = styled.div`
    margin: auto;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 480px) {
        width: 33%;
        }
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

const ConnectButton = styled(WalletDialogButton)`
    padding: 16px 20px!important;
    border-radius: 20px!important;
    border-width: 3px!important;
    border-color: #0286c3!important;
    background-color: transparent!important;
    color: #49fb35!important;
    border: solid!important;

    @media screen and (max-width: 480px) {
        padding: 10px 5px!important;
        border-width: 2px!important;
        font-size: 10px!important;

    }

`;

const ButtonText = styled.p`
    color: #49fb35;
`;

const BrandText = styled.h2`
    color: #FFFFFF;
    font-family: Unisect-Black;
    font-size: 32px;
    margin-block-start: 0.1em;
    margin-block-end: 0.5em;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

const CustomLogoImg = styled.img`
    height: 8em;
    width: 23em;
    margin-block-start: 2em;
    margin-block-end: 2em;

    @media screen and (max-width: 480px) {
      height: 2.75em;
      width: 9em;
  
  }
`;

export function OurNavbar(props) {
  const wallet = useAnchorWallet();

  
  return (
    <NavbarContainer>

      <BrandContainer>
      <a href = "https://twitter.com/metamorfans">
            <SocialMediaImg src={TwitterImg} />
        </a>
        <a href = "https://discord.gg/C4BPRXvdYr">
            <SocialMediaImg src={DiscordImg} />
        </a>
      </BrandContainer>

      <BrandContainer>
      <CustomLogoImg src={LogoImg} />
      </BrandContainer>

        <BrandContainer>
        {!wallet && (
          <ConnectButton>Connect Wallet</ConnectButton>
        )}
        {wallet && (
            <ButtonText>Wallet: {shortenAddress(wallet.publicKey.toBase58() || "")}</ButtonText>
        )}
        </BrandContainer>

    </NavbarContainer>


  );


}