import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { currencyHelper } from '../../lib/helpers'
import { RowSpacer, Spacer, Typography } from '../atoms'
import { EventFooter, EventHeader, ExpandingPill, Row } from '../molecules'

interface Props {
  event: DiceEvent
}

const Event: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false)
  const { event } = props

  const imageSource = open ? event.event_images.landscape : event.event_images.square

  return (
    <Container>
      <EventHeader event={event} source={imageSource} height={open ? 140 : 300} />

      <Spacer size={2} />

      <Typography>{moment(event.date).format('ddd D MMM - h:mma')}</Typography>

      <Spacer size={3} />

      <Typography type='header'>{event.name}</Typography>

      <Spacer size={3} />

      <Typography type='subheader'>{event.venue}</Typography>

      <Typography>{`${event.location.city}, ${event.location.country}`}</Typography>

      <Spacer size={2} />

      <ExpandingPill open={open} setOpen={setOpen}>
        <Row justify='space-between' style={{ cursor: 'pointer' }}>
          <Typography type='bodyBold'>More info</Typography>

          <Typography type='bodyBold'>+</Typography>
        </Row>
        <>
          {open && <>
            <Spacer size={3} />

            <Typography>{event.description}</Typography>

            {!!event.artists.length && <>
              <Spacer size={2} />

              <Typography type='sectionHeader'>LINEUP</Typography>

              <Spacer size={2} />

              {event.artists.map(artist => <Typography key={artist}>{artist}</Typography>)}
            </>}

            <Spacer size={2} />

            <Typography type='sectionHeader'>TICKETS</Typography>

            <Spacer size={2} />

            {event.ticket_types.map((ticket: Record<string, any>) => <>
              <Row align='center'>
                <Typography>{ticket.name}</Typography>

                <RowSpacer size={1} />
                <>
                  {!!ticket.price.total && <>
                    <Typography>-</Typography>

                    <RowSpacer size={1} />

                    <Typography type='bodyBold'>{currencyHelper(ticket.price.total, event.currency)}</Typography>

                    {ticket.sold_out && <>
                      <RowSpacer size={1} />

                      <Typography type='caption'>SOLD OUT</Typography>
                    </>}
                  </>}
                </>
              </Row>
            </>
            )}
          </>}
        </>
      </ExpandingPill>

      <Spacer size={2} />

      <EventFooter event={event} />

      <Spacer size={4} />
    </Container>
  )
}

const Container = styled.div`
  order: 1;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1000px) {
    width: 30%;
  }
`

export default Event