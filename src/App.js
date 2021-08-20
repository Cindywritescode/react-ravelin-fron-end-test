import React from 'react';
import styled from 'styled-components';
import { BackgroundImg, HeroSection, ProductImg } from './components/HeroSection';
import { ClientRollSection } from './components/ClientRollSection';
import { SolutionSection } from './components/SolutionSection';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

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
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 1180px) {
    padding: 0 1em;
  }
`;

export default App;
