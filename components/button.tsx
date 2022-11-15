import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  disabled?: boolean
  onClick?: () => void
}

const StyledButton = styled.div<{ disabled?: boolean }>`
  background-color: ${props => props.disabled ? 'lightgray' : 'blue'};
  color: ${props => props.disabled ? 'black' : 'white'};
  width: 120px;
  padding: 10px;
  font-weight: 600;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    ${props => !props.disabled && 'transform: scale(1.05);'}
  }
`

const Button = (props: Props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>
}

export default Button