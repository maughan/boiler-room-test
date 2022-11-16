import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { PlayButton, Tag } from '../atoms'

interface Props {
  source: string
  height: number
  event: DiceEvent
}

const EventHeader: React.FC<Props> = (props: Props) => {
  const { source, event } = props

  const tagColor = event.featured ? 'blue' : 'black'
  const tagText = event.featured ? 'FEATURED' : `On sale ${moment(event.sale_start_date).format('d MMM h:mma')}`
  const showPlayButton = !!event.spotify_tracks.length || !!event.apple_music_tracks.length

  return (
    <Container>
      <ImageContainer {...props}>
        <Image
          src={source}
          alt={`${event.name}-image`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"
          loading='eager'
          priority
        />
      </ImageContainer>
      <Tag color={tagColor}>{tagText}</Tag>

      {showPlayButton && <PlayButton />}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const ImageContainer = styled.div<Props>`
  width: 100%;
  position: relative;
  height: ${props => props.height}px;
`

export default EventHeader