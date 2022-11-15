import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10vw;
`

interface Props {
  children?: Array<JSX.Element> | JSX.Element
}

const Grid = (props: Props) => {
  return <Container>
    {props.children}
  </Container>
}

export default Grid