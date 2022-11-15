import React from 'react'
import styled from 'styled-components'

type RowJustifyContent = 'start' | 'end' | 'space-around' | 'space-between' | 'center'
type RowAlignContent = 'start' | 'end' | 'center'

interface Props {
  justify?: RowJustifyContent
  align?: RowAlignContent
  children?: JSX.Element | Array<JSX.Element>
  style?: Record<string, any>
}

const Container = styled.div<Props>`
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  display: flex;
`

const Row: React.FC<Props> = (props: Props) => {
  return <Container {...props}>{props.children}</Container>
}

export default Row