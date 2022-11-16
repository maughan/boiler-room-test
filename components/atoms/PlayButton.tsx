import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const PlayButton: React.FC = () => {
  return (
    <Container>
      <Image src={'/play.png'} alt='play-button' width={50} height={50} />
    </Container>
  )
}

const Container = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default PlayButton