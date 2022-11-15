import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  color: 'blue' | 'black'
}

const Container = styled.div<{ color: 'blue' | 'black' }>`
  width: max-content;
  color: white;
  background-color: ${props => props.color};
  position: absolute;
  right: 15px;
  bottom: 20px;
  padding: 5px 8px;
  font-size: 14px;
  font-weight: 500;
`

const Tag = (props: Props) => {
  return <Container {...props}>{props.text}</Container>
}

export default Tag