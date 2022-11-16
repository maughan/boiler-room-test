import React from 'react'
import styled from 'styled-components'

interface Props {
  size: number
}

const RowSpacer: React.FC<Props> = (props: Props) => {
  return (
    <Container {...props} />
  )
}

const Container = styled.div<Props>`
  height: 100%;
  width: ${props => props.size * 5}px;
`

export default RowSpacer