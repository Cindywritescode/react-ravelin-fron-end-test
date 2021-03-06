import styled, { css } from 'styled-components';
import { screenSize } from './config';

const justifyMap = {
  between: 'space-between',
  center: 'center',
}

const gutterMap = {
  xsmall: '0.5em',
  small: '1em',
  medium: '2em',
  large: '4em'
}

const computeBasis = (ratio) => parseFloat(100 * ratio.split('/')[0]/ratio.split('/')[1]).toFixed(2)

export const Box = styled.div`
  display: flex;
  margin: ${props => props.margin ? gutterMap[props.margin] : 'initial'};
  padding: ${props => props.pad ? gutterMap[props.pad] : 'initial'};
  flex-basis: ${props => props.basis ? `${computeBasis(props.basis)}%` : 'auto'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => (props.wrap && 'wrap') || (props.nowrap && 'nowrap') || 'initial'};
  justify-content: ${props => justifyMap[props.justify] || 'auto' };
  align-items: ${props => props.align || 'initial'};
  
  ${props => props.hideOnScreen && hideMediaQuery}
  ${props => props.showOnScreen && showMediaQuery}
`

const hideMediaQuery = css`
  @media (max-width: ${props => screenSize[props.hideOnScreen]}) {
    display: none;
  }
`

const showMediaQuery = css`
  @media (min-width: ${props => screenSize[props.showOnScreen]}) {
    display: none;
  }
`
