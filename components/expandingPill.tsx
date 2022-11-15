import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{ open: boolean }>`
  height: ${props => props.open ? 'max-content' : '30px'};
  width: 100%;
  padding: 8px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: top;
`

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  children?: JSX.Element | Array<JSX.Element>
}

const ExpandingPill = (props: Props) => {
  const { open, setOpen } = props

  function toggleOpen() {
    setOpen(!open)
  }

  return <Container open={open} onClick={toggleOpen}>{props.children}</Container>
}

export default ExpandingPill