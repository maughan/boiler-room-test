import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { currencyHelper, getStartingPrice } from '../../lib/helpers'
import { Row } from './'
import { Button, Typography } from '../atoms'

interface Props {
  event: DiceEvent
}

const EventFooter: React.FC<Props> = (props: Props) => {
  const { event } = props

  const startingPrice = React.useMemo(() => getStartingPrice(event), [event])
  const currencyString = currencyHelper(startingPrice, event.currency)
  const buttonText = moment().isAfter(event.sale_start_date) ?
    event.sold_out ?
      'SOLD OUT' :
      'BOOK NOW' :
    'GET REMINDED'
  const showFrom = event.ticket_types.length > 1

  return (
    <Row justify='space-between' align='center'>
      <Button disabled={event.sold_out}>{buttonText}</Button>

      <>
        {!!startingPrice && <PriceContainer>
          {showFrom && <Typography type='caption'>From</Typography>}
          <Typography type='price'>{currencyString}</Typography>
        </PriceContainer>}
      </>
    </Row>
  )
}

const PriceContainer = styled.div`
  text-align: right;
`

export default EventFooter