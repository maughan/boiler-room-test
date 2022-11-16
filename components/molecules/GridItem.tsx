import React from 'react'
import { useEvents } from '../../lib/useEvents'
import { Event } from '../organisms'
import { Typography } from '../atoms'

interface Props {
  index: number
  venue: string
  setMore: (more: boolean) => void
}

const GridItem: React.FC<Props> = (props: Props) => {
  const { index, venue, setMore } = props

  const query: Query = {
    'page[number]': index,
    'page[size]': 12,
  }

  if (venue !== '') {
    query['filter[venue]'] = venue
  }

  const { data } = useEvents<EventsResponse>(query)

  if (!data) {
    setMore(false)

    return (
      <Typography type='header'>Loading...</Typography>
    )
  }

  if (!data.data || !data.links.next) {
    setMore(false)
    return (
      <Typography type='header'>No results...</Typography>
    )
  } else {
    setMore(true)
  }

  return <>
    {data.data.map((item, i) => <Event event={item} key={`${item.name}-${i}`} />)}
  </>
}

export default GridItem