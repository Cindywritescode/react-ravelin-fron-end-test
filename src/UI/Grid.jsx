import styled, { css } from 'styled-components';
import { screenSize } from './config';

const gridGapMap = {
  small: '1em',
  medium: '2em',
  large: '4em'
}

const gridMixin = css`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
  grid-gap: ${props => gridGapMap[props.gap] || 'inherit'};
`

export const Grid = styled.div`
  ${gridMixin}  
  
  ${props => props.largeCols && computeGridColums('large')}
  ${props => props.mediumCols && computeGridColums('medium')}
  ${props => props.smallCols && computeGridColums('small')}
`

const computeGridColums = (size) => css`
  @media (max-width: ${screenSize[size]}) {
    grid-template-columns: repeat(${props => props[`${size}Cols`]}, 1fr);  
  }
`
