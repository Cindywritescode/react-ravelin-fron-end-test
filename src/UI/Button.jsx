import styled from 'styled-components';

export const Button = () => (
  <ButtonPrimary>View solutions</ButtonPrimary>
)

const ButtonPrimary = styled.button`
  color: white;
  font-size: 0.8em;
  border: none;
  line-height: 1.5em;
  background: #1F9BF4;
  border-radius: 0.2em;
  padding: 14px 34px;
  margin: 1px;
  
  &:hover  {
    background: white;
    color: #2A4AFC;
    border: 1px solid #2A4AFC;
    margin: 0;
  }
`