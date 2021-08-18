import './App.css';
import { HeroSection } from './components/HeroSection';
import { ClientRollSection } from './components/ClientRollSection';
import { SolutionSection } from './components/SolutionSection';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <HeroSection/>
      <ClientRollSection/>
      <SolutionSection/>
    </Container>
  );
}

const Container = styled.div`
  width: 1180px;
  margin: 0 auto;
`

export default App;
