import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';
import scLogo from '../assets/sc.png';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }`;

const Wrapper = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  background-color: #222;
  padding: 20px;
  color: white;
`;

const Title = styled.div`
   font-size: 1.5em;
`;

const Subtitle = styled.div`
   font-size: 0.7em;
   margin-bottom: 0.6em;
`;

const Logo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
`;

const Image = styled.img`
  width: 125px;
  height: 125px;
`;

const Header = () => (
  <Wrapper>
    <Heading>
      <Logo src={logo} alt="logo" />
      <Title>Welcome to React</Title>
      <Subtitle>Powered by <b>Styled Components</b></Subtitle>
      <Image src={scLogo} />
    </Heading>
  </Wrapper>
);

export default Header;



