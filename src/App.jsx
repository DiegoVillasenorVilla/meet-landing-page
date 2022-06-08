import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import styled from "styled-components";
import imageone from "./assets/desktop/image-hero-left.png";
import imagetwo from "./assets/desktop/image-hero-right.png";
import woman from "./assets/desktop/image-woman-in-videocall.jpg";
import women from "./assets/desktop/image-women-videochatting.jpg";
import men from "./assets/desktop/image-men-in-meeting.jpg";
import man from "./assets/desktop/image-man-texting.jpg";


const HeaderComponent = styled.div``;

const Logo = styled.img`
  margin-top: 40px;
  margin-left: 400px;

  @media (max-width: 375px) {
    margin-left: 140px;
  }

  @media (max-width: 768px) {
    margin-left: 200px;
  }
`;

const TopContainer = styled.div`
  margin-top: 80px;
  display: flex;
`;

const ImageOne = styled.img`
  height: 200px;
  width: 190px;
  margin-right: 50px;
  margin-top: -30px;

  @media (max-width: 375px) {
    margin-left: 20px;
    height: 150px;
    width: 120px;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const ImageTwo = styled.img`
  height: 200px;
  width: 190px;
  margin-left: 100px;
  margin-top: -30px;

  @media (max-width: 375px) {
    margin-left: -40px;
    height: 150px;
    width: 120px;
  }

  @media (max-width: 768px) {
    margin-left: -20px;
  }
`;

const Header = styled.h1`
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  color: #28283d;
  margin-left: 100px;

  @media (max-width: 375px) {
    font-size: 40px;
    line-height: 44px;
    margin-top: 160px;
    margin-left: -100px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    margin-top: 180px;
    margin-left: -90px;
  }
`;

const Paragraph = styled.p`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #87879d;

  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 10px;
  }

`;

const ButtonOne = styled.button`
  background: #4d96a9;
  border-radius: 29px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  border: none;
  width: 193px;
  height: 58px;
  margin-top: 32px;
  margin-left: 290px;
  margin-right: 16px;

  @media (max-width: 375px) {
    margin-left: 91px;
  }
  
  @media (max-width: 768px) {
    margin-left: 110px;
  }

  &:hover {
    background: #71c0d4;
  }
`;

const ButtonTwo = styled.button`
  background: #855fb1;
  border-radius: 29px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  border: none;
  width: 139px;
  height: 58px;
  
  @media (max-width: 375px) {
    margin-top: 16px;
    margin-left: 118px;
  }

  &:hover {
    background: #b18bdd;
  }
`;

const Line = styled.hr`
  size: 8px;
  height: 84px;
  color: #000;
  background-color: #000;
  mix-blend-mode: normal;
  opacity: 0.25;
  border: 1px solid #87879d;
  margin-top: 72px;
  margin-right: 40px;

   
  @media (max-width: 375px) {
    margin-left: 40px;
  }

  @media (max-width: 768px) {
    margin-left: 50px;
  }
`;

const Separation = styled.div`
  background: #fafafa;
  border: 1px solid rgba(135, 135, 157, 0.25);
  border-radius: 29px;
  height: 56px;
  width: 56px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  color: #87879d;
  margin-top: 1px;
  margin-left: -35px;
  text-align: center;
  position: relative;
  z-index: 100;

  @media (max-width: 375px) {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    margin-left: 15px;
  }
`;


const BodyComponent = styled.div`
  margin-top: 40px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 375px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PeopleImages = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 5px;
  margin-right: 20px;

  @media (max-width: 375px) {
    height: 130px;
    width: 130px;
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    height: 170px;
    width: 170px;
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 10px;
  }

`;

const Advice = styled.h2`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #4d96a9;
  margin-top: 20px;
  margin-left: 300px;

  @media (max-width: 375px) {
    margin-top: 30px;
    margin-left: 60px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 255px;
  }
  
`;

const HeaderTwo = styled.h2`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  color: #28283d;
  margin-top: 20px;

  @media (max-width: 375px) {
    font-size: 32px;
    line-height: 36px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 60px;
  }
`;

const ParagraphTwo = styled.p`
  margin-top: 10px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #87879d;
  margin-top: 20px;

   @media (max-width: 375px){
    font-size: 12px;
   }

   @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 60px;
  }
`;


const OverContainer = styled.div`
  opacity: 0.75;
  background: #4d96a9;
  mix-blend-mode: normal;
  box-sizing: border-box;
  position: relative;
  z-index: 150;
  display: flex;
  width: 100%;
  height: 230px;
  margin-top: -232px;
  margin-left: -1px;

  @media (max-width: 375px){
    height: 230px;
    margin-top: -230px;
    flex-direction: column;
  }
`;

const Headerthree = styled.h3`
  margin-left: 105px;
  margin-top: 80px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  color: #fafafa;

  @media (max-width: 375px){
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    margin-left: 20px;
    margin-top: 10px;
  }
`;

const Info = styled.p`
  margin-top: 80px;
  margin-left: 40px;
  margin-right: 40px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #fafafa;

  @media (max-width: 375px){
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 40px;
  }


`;

const ButtonThree = styled.button`
  margin-top: 80px;
  margin-right: 20px;
  background: #855fb1;
  border-radius: 29px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  border: none;
  width: 193px;
  height: 58px;
  
  @media (max-width: 375px){
    margin-top: 5px;
    margin-left: 100px;
    height: 50px;
  }


  &:hover {
    background: #b18bdd;
  }
`;


function App() {
  return (
    <div className="App">
      <HeaderComponent>
        <Logo src={logo} alt="logo" />

        <TopContainer>

          <ImageOne src={imageone} alt="people smiling" />
          <Header>
            {" "}
            Group Chat <br />
            for Everyone
          </Header>
          <ImageTwo  src={imagetwo} alt="people smiling" />
          

        </TopContainer>
        <Paragraph>
          Meet makes it easy to connect with others face-to-face virtually{" "}
          <br />
          and collaborate across any device.
        </Paragraph>
        <ButtonOne> Download v1.3</ButtonOne>
        <ButtonTwo> What is it?</ButtonTwo>
      </HeaderComponent>
      <Line />
      <Separation> 01</Separation>

      <BodyComponent>
        <ImageContainer>
          <PeopleImages src={woman} alt="auntie" />
          <PeopleImages src={women} alt="women" />
          <PeopleImages src={men} alt="women" />
          <PeopleImages src={man} alt="women" />
        </ImageContainer>

        <Advice> Built for modern use</Advice>
        <HeaderTwo>
          Smarter meetings, all <br />
          in one place
        </HeaderTwo>
        <ParagraphTwo>
          Send messages, share files, show your screen, and record your <br />
          meetings — all in one workspace. Control who can join with <br />
          invite-only team access, data encryption, and data export.
        </ParagraphTwo>
      </BodyComponent>
      <Line />
      <Separation> 02</Separation>
      {/*<FooterImage src={footer} />*/}
      <div className="background-footer"></div>
      <OverContainer>
        <Headerthree>
          {" "}
          Experience more <br />
          together
        </Headerthree>
        <Info>
          Stay connected with reliable HD meetings <br />
          and unlimited one-on-one and group <br />
          video sessions.
        </Info>
        <ButtonThree> Download v1.3 </ButtonThree>
      </OverContainer>
    </div>
  );
}

export default App;
