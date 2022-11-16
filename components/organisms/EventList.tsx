import React from 'react'
import { useEvents } from '../../lib/useEvents'
import { Button, Spacer, Typography } from '../atoms'
import { Grid } from '../molecules'
import Event from './Event'

interface Props {
  venue: string
}

const EventList = (props: Props) => {
  const [page, setPage] = React.useState(1)
  const [more, setMore] = React.useState(false)
  const [events, setEvents] = React.useState<Array<DiceEvent>>([])

  const query: Query = {
    'page[number]': page,
    'page[size]': 12,
  }

  if (props.venue !== '') {
    query['filter[venue]'] = props.venue
  }

  const { data, mutate, loading } = useEvents(query)

  React.useEffect(() => {
    if (!data) return

    setEvents([...events, ...data.data])
    setMore(!!data.links.next)
  }, [data])

  React.useEffect(() => {
    if (!props.venue) return

    function resetState() {
      setPage(1)
      setMore(false)
      setEvents([])
      mutate()
    }

    resetState()
  }, [props.venue])

  return (
    <>
      {!events.length && !loading && <Typography type='header'>No events found :(</Typography>}
      {!!loading && <Typography type='header'>Loading...</Typography>}
      <Grid>
        {events.map((event, index) => <Event event={event} key={`${event.name}-${index}`} />)}
      </Grid>

      <Spacer size={10} />

      {!!more && <Button onClick={() => setPage(page + 1)}>Load more...</Button>}
    </>
  )
}

export default EventList