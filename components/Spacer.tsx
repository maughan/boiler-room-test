import React from 'react'
import styled from 'styled-components'

interface Props {
  size: number
}

const Container = styled.div<Props>`
  width: 100%;
  height: ${props => props.size * 5}px;
`

const Spacer = (props: Props) => {
  return <Container {...props} />
}

export default Spacer