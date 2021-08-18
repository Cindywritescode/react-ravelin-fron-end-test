import styled from 'styled-components';

export const Button = () => (
  <ButtonPrimary>View solutions</ButtonPrimary>
)

const ButtonPrimary = styled.button`
  color: white;
  font-size: 15px;
  font-family: "SF Mono";
  border: none;
  line-height: 152%;
  background: #1F9BF4;
  border-radius: 5px;
  padding: 14px 34px;
  
  &:hover  {
    background: white;
    color: #2A4AFC;
    border: 1px solid #2A4AFC;
  }
`