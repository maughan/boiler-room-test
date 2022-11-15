import React from 'react'
import styled from 'styled-components'

interface Props {
  size: number
}

const Container = styled.div<Props>`
  height: 100%;
  width: ${props => props.size * 5}px;
`

const RowSpacer = (props: Props) => {
  return <Container {...props} />
}

export default RowSpacer