import styled from 'styled-components';
import { Button } from '../UI/Button';
import { Container } from '../App';
import { Box } from '../UI/Box';


export const HeroSection = () => (
  <HeroContainer>
    <Container>
      <Box justify="left">
        <Summary>
          <h1>Make smarter decision</h1>
          <p>Ravelin provides technology and support to help you prevent evolving fraud threats and accept payments
            with confidence.</p>
          <Button/>
        </Summary>
      </Box>
    </Container>
  </HeroContainer>
);

export const Summary = styled.div`
  color: white;
  width: 50vw;
  padding: 3em 0;

  & p {
    font-size: 1em;
    line-height: 1.5em;
  }

  @media (max-width: 1180px) {
    width: 60vw;
  }
  @media (max-width: 780px) {
    width: 90vw;
  }
`;

const HeroContainer = styled.header`
  height: 50vh;
`;