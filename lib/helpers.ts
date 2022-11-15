export function currencyHelper(price: number, currency: string): string {
  console.log(currency)
  const symbol = currency === 'EUR' ? '€' : '£'
  const pounds = penceToPounds(price)
  let amount = `${pounds}`

  if (pounds % 1 !== 0) amount = pounds.toFixed(2)

  return `${symbol}${amount}`
}

export function getStartingPrice(event: DiceEvent): number {
  const ticketFaceValues = event.ticket_types.map((ticket) => ticket.price.face_value)

  return ticketFaceValues.sort((a: number, b: number) => a + b)[0]
}

export function penceToPounds(price: number): number {
  return price / 100
}