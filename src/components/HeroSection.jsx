import { Nav } from './Nav';
import styled from 'styled-components';
import { Button } from '../UI/Button';


export const HeroSection = () => (
  <header>
    <Nav/>
    <Summary>
      <h1>Make smarter decision</h1>
      <p>Ravelin provides technology and support to help you prevent evolving fraud threats and accept payments
        with confidence.</p>
      <Button/>
    </Summary>
    <BackgroundImg/>
    <ProductImg/>
  </header>
);

const BackgroundImg = () => (
  <HeroBgImgCol>
    <img src="/images/graph-viz.png" alt="product image" width="620.87px"/>
  </HeroBgImgCol>
);

const ProductImg = () => (
  <ProductImgStyle>
    <img src="/images/product-fragments.png" alt="product image" width="620.87px"/>
  </ProductImgStyle>
);

const Summary = styled.div`
  color: white;
  width: 613px;
  height: 190px;
  margin-top: 5rem;

  & p {
    font-size: 15px;
    line-height: 1.2rem;
    width: 548px;
  }
`;

const HeroBgImgCol = styled.div`
  z-index: -1;
  position: absolute;
  width: 1850.16px;
  height: 705.38px;
  left: -406.93px;
  top: -266px;
  background: linear-gradient(90deg, #4E54C8 0%, #8F94FB 100%);
  transform: rotate(-15deg);
  & img {
    position: absolute;
    width: 1240px;
    height: 612px;
    left: 14px;
    top: -24px;
    transform: rotate(0deg);
    mix-blend-mode: overlay;
    opacity: 0.2;
  }
`;

const ProductImgStyle = styled.div`
  position: absolute;
  width: 620.87px;
  height: 514.61px;
  left: 848px;
  top: -1.4px;
  //background: url(product-fragments.png);
  transform: rotate(-15deg);
`

