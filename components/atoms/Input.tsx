import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

interface Props {
  value: string
  onChange: (value: string) => void
  style?: Record<string, string | number>
}

const Input: React.FC<Props> = (props: Props) => {
  const { value, onChange, style } = props

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  return (
    <StyledInput
      style={style}
      value={value}
      onChange={handleChange}
    />
  )
}

const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 0;
  border-bottom: 1px solid black;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-bottom: 2px solid blue;
  }

  @media (min-width: 540px) {
    width: 500px;
  }
`

export default Input