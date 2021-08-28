import styled from 'styled-components';

export const Card = ({
  children
}) => (
  <CardPrimary>
    {children}
  </CardPrimary>
);

export const CardBody = ({
  children
}) => (
  <CardBodyContainer>
    <p>{children}</p>
  </CardBodyContainer>
);

const CardBodyContainer = styled.div`
  flex: 1;
  
  & p {
    font-size: 0.77em;
  }
  
  @media (max-width: 580px) {
    font-size: 1em;
  }
`;

export const CardFooter = styled.div`
  & a {
    text-decoration: none;
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
`

const BasicCardHeader = ({
  title,
  className,
}) => (
  <div className={className}>
    <h3>{title}</h3>
  </div>
);

const headerColors = {
  blue: '#2749FF',
  cyan: '#31C9AD',
  red: '#EC4E6E',
  purple: '#7056F8'
}

export const CardHeader = styled(BasicCardHeader)`
  & h3 {
    margin: 0;
    color: ${props => headerColors[props.color] || '#000'};
  }
`;

const CardPrimary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 32px 24px;
  
  @media (max-width: 580px) {
    margin: 3px 12px;
    line-height: 1.5em;
  }
`;