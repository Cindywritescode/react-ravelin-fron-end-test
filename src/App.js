import React from 'react';
import styled from 'styled-components';
import { ClientRollSection } from './components/ClientRollSection';
import { SolutionSection } from './components/SolutionSection';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { container } from './styles/common';
import { Hero } from './components/NewHeroIdea';
import { Button } from './UI/Button';

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
            <Button>View solutions</Button>
          </Summary>
        </Container>
      </Hero>
      <Container>
        <ClientRollSection/>
        <SolutionSection/>
      </Container>
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

export const Summary = styled.div`
  color: white;
  width: 40vw;
  padding: 3em 0;

  & p {
    font-size: 1em;
    line-height: 1.5em;
  }

  @media (max-width: 1180px) {
    width: 60vw;
  }
  @media (max-width: 780px) {
    width: 85vw;
  }
`;

export default App;
