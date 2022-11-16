import React from 'react'
import styled from 'styled-components'

interface Props {
  color: 'blue' | 'black'
  children?: React.ReactNode
}

const Tag: React.FC<Props> = (props: Props) => {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
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

export default Tag