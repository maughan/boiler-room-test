import React from 'react'
import styled from 'styled-components'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  children?: React.ReactNode
}

const ExpandingPill: React.FC<Props> = (props: Props) => {
  const { open, setOpen } = props

  const toggleOpen = React.useCallback((open: boolean) => {
    setOpen(open)
  }, [setOpen])

  return (
    <Container open={open} onClick={() => toggleOpen(!open)}>
      {props.children}
    </Container>
  )
}

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

export default ExpandingPill