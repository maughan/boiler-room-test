import React from 'react'
import styled from 'styled-components'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<Props> = (props: Props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${props => props.disabled ? 'lightgray' : 'blue'};
  color: ${props => props.disabled ? 'black' : 'white'};
  width: 120px;
  padding: 10px;
  font-weight: 600;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    ${props => !props.disabled && 'transform: scale(1.05);'}
  }
`

export default Button