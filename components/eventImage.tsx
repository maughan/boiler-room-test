import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import PlayButton from './playButton'
import Tag from './tag'

interface Props {
  source: string
  event: DiceEvent
}

const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
`

const EventImage = (props: Props) => {
  const { source, event } = props

  const tagColor = event.featured ? 'blue' : 'black'
  const tagText = event.featured ? 'FEATURED' : `On sale ${moment(event.sale_start_date).format('d MMM h:mma')}`
  const showPlayButton = !!event.spotify_tracks.length || !!event.apple_music_tracks.length

  return <Container>
    <Image src={source} alt={`${event.name}-image`} />
    <Tag color={tagColor} text={tagText} />

    {showPlayButton && <PlayButton />}
  </Container>
}

export default EventImage