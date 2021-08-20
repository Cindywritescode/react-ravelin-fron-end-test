import React from 'react';
import styled from 'styled-components';
import { ClientRollSection } from './components/ClientRollSection';
import { SolutionSection } from './components/SolutionSection';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { container } from './styles/common';
import { Hero } from './components/NewHeroIdea';
import { Button } from './UI/Button';
import { Summary } from './components/HeroSection';

function App() {
  return (
    <Wrapper>
      <Hero>
        <Nav/>
        <Container>
          <Summary>
            <h1>Make smarter decision</h1>
            <p>Ravelin provides technology and support to help you prevent evolving fraud threats and accept payments
              with confidence.</p>
            <Button/>
          </Summary>
        </Container>
      </Hero>
      {/*<HeroSection/>*/}
      <Container>
        <ClientRollSection/>
        <SolutionSection/>
      </Container>
      {/*<BackgroundImg/>*/}
      {/*<ProductImg/>*/}
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
