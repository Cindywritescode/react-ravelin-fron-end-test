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

export const Summary = styled.div`
  color: white;
  margin-top: 5rem;

  & p {
    font-size: 1em;
    line-height: 1.5em;
    width: 548px;
  }
`;

const HeroContainer = styled.header`
  height: 50vh;
`;

// export const BackgroundImg = () => (
//   <HeroBgImgCol>
//     <img src="./images/graph-viz.png" alt="product image" width="60%"/>
//   </HeroBgImgCol>
// );

// const HeroBgImgCol = styled.div`
//   position: absolute;
//   width: 1900px;
//   height: 600px;
//   transform: rotate(-15deg);
//   top: -230px;
//   left: -120px;
//   z-index: -1;
//   background: linear-gradient(90deg, #4E54C8 0%, #8F94FB 100%);
//   overflow: hidden;
//
//
//   & img {
//     position: absolute;
//     top: 180px;
//     left: 114px;
//     mix-blend-mode: overlay;
//     opacity: 0.2;
//     transform: rotate(14deg);
//   }
//
//   @media (max-width: 1180px) {
//     transform: rotate(0deg);
//     top: 0;
//     left: 0;
//     height: 65vh;
//   }
// `;

// export const ProductImg = () => (
//   <ProductImgStyle>
//     <img src="./images/product-fragments.png" alt="product image" width="620px"/>
//   </ProductImgStyle>
// );
//
//
// const ProductImgStyle = styled.div`
//   position: absolute;
//   top: -12px;
//   right: -90px;
//   transform: rotate(-15deg);
//
//   @media (max-width: 1180px) {
//     display: none;
//   }
// `;

