import styled from 'styled-components';
import { path } from '../helpers/path';

export const Hero = ({
  children
}) => (
  <HeroContainer>
    {children}
    <HeroTriangle/>
    <HeroBackgroundImage src={path('/images/graph-viz.png')}/>
    {/*<HeroProductImage src={path('images/product-fragments.png')}/>*/}
  </HeroContainer>
);

const HeroContainer = styled.div`
  position: relative;
  padding-bottom: 25vh;
  overflow: hidden;
  background: linear-gradient(90deg, #4E54C8 0%, #8F94FB 100%);
`;

const HeroTriangle = styled.div`
  position: absolute;
  width: 125vw;
  height: 50vh;
  bottom: -50vh;
  left: 0;
  transform: rotate(-15deg);
  transform-origin: top left;
  background-color: white;
`;

const HeroBackgroundImage = styled.img`
  height: 75vh;
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: overlay;
  opacity: 0.2;
`;

const HeroProductImage = styled.img`
  position: absolute;
  height: 70vh;
  top: 0;
  right: -6vw;
  transform: rotate(-15deg);
`;