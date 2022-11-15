import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  bottom: 5px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
`

const PlayButton = () => {
  return <Container>
    <Image src={'/play.png'} alt='play-button' />
  </Container>
}

export default PlayButton