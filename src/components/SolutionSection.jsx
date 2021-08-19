import styled from 'styled-components';
import { Card, CardBody, CardFooter, CardHeader } from '../UI/Card';
import { Link } from '../UI/Link';

export const SolutionSection = () => (
  <SolutionGridSection>
    <h2>Learn more about our solutions</h2>
    <SolutionGrid>
      {cards.map(card => <GridCard { ...card } />)}
    </SolutionGrid>
  </SolutionGridSection>
);

const GridCard = ({
  title,
  color,
  body,
  link
}) => (
  <Card>
    <CardHeader {...{ title, color }}/>
    <CardBody>{body}</CardBody>
    <CardFooter>
      <Link title="Learn more" url={link} />
    </CardFooter>
  </Card>
);

const cards = [
  {
    color: 'blue',
    title: 'Detect',
    body: 'Understand the risk score for every customer from the moment they land on your website.',
    link: '#'
  },
  {
    color: 'cyan',
    title: 'Accept',
    body: 'Manage global regulation and route every payment to the path with the best chance of acceptance.',
    link: '#'
  },
  {
    color: 'red',
    title: 'Connect',
    body: 'Link analysis to power your investigations, makes machine learning models more effective.',
    link: '#'
  },
  {
    color: 'purple',
    title: 'Protect',
    body: 'Use machine learning models trained on your customer data to quickly detect unusual activity and flag when an account has been hacked.',
    link: '#'
  }
];

const SolutionGridSection = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-gap: 26px;

  @media (min-width: 580px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1180px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

`;