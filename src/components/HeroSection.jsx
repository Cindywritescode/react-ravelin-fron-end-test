import { Nav } from './Nav';
import styled from 'styled-components';

export const HeroSection = () => (
  <header>
    <Nav/>
    <Summary>
      <h1>Make smarter decision</h1>
      <p>Ravelin provides technology and support to help you prevent evolving fraud threats and accept payments
        with confidence.</p>
      <button>View solutions</button>
    </Summary>

  </header>
);

const Summary = styled.div`
  width: 613px;
  height: 190px;
  
  & p{
    width: 548px;
  }
`;
