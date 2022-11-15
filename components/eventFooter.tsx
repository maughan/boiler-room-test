import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { currencyHelper, getStartingPrice } from '../lib/helpers'
import Button from './button'
import Row from './row'
import Typography from './typography'

interface Props {
  event: Record<string, any>
}

const PriceContainer = styled.div`
  text-align: right;
`

const EventFooter = (props: Props) => {
  const { event } = props

  const buttonText = moment().isAfter(event.sale_start_date) ? event.sold_out ? 'SOLD OUT' : 'BOOK NOW' : 'GET REMINDED'
  const startingPrice = getStartingPrice(event)
  const currencyString = currencyHelper(startingPrice, event.currency)
  const showFrom = event.ticket_types.length > 1

  return <Row justify='space-between' align='center'>
    <Button text={buttonText} disabled={event.sold_out} />

    <>
      {!!startingPrice && <PriceContainer>
        {showFrom && <Typography type='caption'>From</Typography>}
        <Typography type='price'>{currencyString}</Typography>
      </PriceContainer>}
    </>
  </Row>
}

export default EventFooter