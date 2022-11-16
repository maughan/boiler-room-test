import { useApi } from './useApi'

const baseUrl = 'https://events-api.dice.fm/v1/events'
const apiKey = 'dHmvC0ZXzF4h1mWldfur13c6s4Ix6wCF4OTzozXC'

export function useEvents(query: Query) {
  const fetcher = async (query: Query) => {
    const url = baseUrl + '?' + new URLSearchParams(query as Record<string, any>).toString()
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    })

    if (!res.ok) {
      throw new Error('An error occured')
    }

    return res.json()
  }

  return useApi<EventsResponse, Error>(query, fetcher)
}