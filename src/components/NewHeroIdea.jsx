import styled from 'styled-components';

export const Hero = ({
  children
}) => (
  <HeroContainer>
    {children}
    <HeroTriangle/>
    <HeroBackgroundImage src='./images/graph-viz.png'/>
  </HeroContainer>
);

const HeroContainer = styled.div`
  position: relative;
  padding-bottom: 25vh;
  overflow-y: hidden;
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