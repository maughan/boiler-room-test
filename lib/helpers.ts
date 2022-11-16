export function currencyHelper(price: number, currency: string): string {
  const userLocale = navigator.language

  return `${Intl.NumberFormat(userLocale, { style: 'currency', currency }).format(price / 100).replace(/\D00(?=\D*$)/, '')}`
}

export function getStartingPrice(event: DiceEvent): number {
  const ticketFaceValues = event.ticket_types.map((ticket) => ticket.price.face_value)

  return ticketFaceValues.sort((a: number, b: number) => a + b)[0]
}