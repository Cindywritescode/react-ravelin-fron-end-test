import { BackgroundImg, HeroSection, ProductImg } from './components/HeroSection';
import { ClientRollSection } from './components/ClientRollSection';
import { SolutionSection } from './components/SolutionSection';
import styled from 'styled-components';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Carousel } from './UI/Carousel';
import { Box } from './UI/Box';

function App() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <Container>
        <ClientRollSection/>
        <SolutionSection/>
      </Container>
      <BackgroundImg/>
      <ProductImg/>
      <Footer/>
    </div>
  );
}

export const Container = styled.section`
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 1180px) {
    padding: 0 1em;
  }
`;

export default App;
