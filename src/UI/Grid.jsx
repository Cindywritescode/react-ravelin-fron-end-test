import styled from 'styled-components';

const gridGapMap = {
  small: '1em',
  medium: '2em',
  large: '4em'
}

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
  grid-gap: ${props => gridGapMap[props.gap] || 'inherit'};
`