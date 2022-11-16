import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: Array<JSX.Element> | JSX.Element
}

const Grid: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10vw;
`

export default Grid