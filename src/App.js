import React from 'react';
import styled, { css } from 'styled-components';
import { BackgroundImg, HeroSection, ProductImg } from './components/HeroSection';
import { ClientRollSection } from './components/ClientRollSection';
import { SolutionSection } from './components/SolutionSection';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { container } from './styles/common';

function App() {
  return (
    <Wrapper>
      <Nav/>
      <HeroSection/>
      <Container>
        <ClientRollSection/>
        <SolutionSection/>
      </Container>
      <BackgroundImg/>
      <ProductImg/>
      <Footer/>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  position: relative;
`;

export const Container = styled.section`
  ${container}
`;

export default App;
