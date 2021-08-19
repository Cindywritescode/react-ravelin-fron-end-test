import styled from 'styled-components';
import { Button } from '../UI/Button';
import { Container } from '../App';


export const HeroSection = () => (
  <HeroContainer>
    <Container>
      <Summary>
        <h1>Make smarter decision</h1>
        <p>Ravelin provides technology and support to help you prevent evolving fraud threats and accept payments
          with confidence.</p>
        <Button/>
      </Summary>
    </Container>
  </HeroContainer>
);

const Summary = styled.div`
  color: white;
  margin-top: 5rem;

  & p {
    font-size: 15px;
    line-height: 1.2rem;
    width: 548px;
  }
`;

const HeroContainer = styled.header`
  height: 12rem;
`;

export const BackgroundImg = () => (
  <HeroBgImgCol>
    <img src="./images/graph-viz.png" alt="product image" width="60%"/>
  </HeroBgImgCol>
);

const HeroBgImgCol = styled.div`
  position: absolute;
  width: 1900px;
  height: 600px;
  transform: rotate(-15deg);
  top: -230px;
  left: -120px;
  z-index: -1;
  background: linear-gradient(90deg, #4E54C8 0%, #8F94FB 100%);
  overflow: hidden;


  & img {
    position: absolute;
    top: 180px;
    left: 114px;
    mix-blend-mode: overlay;
    opacity: 0.2;
    transform: rotate(14deg);
  }

  @media (max-width: 1180px) {
    transform: rotate(0deg);
    height: 800px;
  }
`;

export const ProductImg = () => (
  <ProductImgStyle>
    <img src="./images/product-fragments.png" alt="product image" width="620px"/>
  </ProductImgStyle>
);


const ProductImgStyle = styled.div`
  position: absolute;
  top: -12px;
  right: -90px;
  transform: rotate(-15deg);

  @media (max-width: 1180px) {
    display: none;
  }
`;

