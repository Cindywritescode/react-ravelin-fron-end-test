import { BackgroundImg, HeroSection, ProductImg } from './components/HeroSection';
import { ClientRollSection } from './components/ClientRollSection';
import { SolutionSection } from './components/SolutionSection';
import styled from 'styled-components';
import { Nav } from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <Container>
        <ClientRollSection/>
        <SolutionSection/>
      </Container>
      {/*<Footer />*/}


      <BackgroundImg/>
      <ProductImg/>
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
