import React from 'react'
import styled from 'styled-components'

interface Props {
  size: number
}

const Spacer: React.FC<Props> = (props: Props) => {
  return (
    <Container {...props} />
  )
}

const Container = styled.div<Props>`
  width: 100%;
  height: ${props => props.size * 5}px;
`

export default Spacer