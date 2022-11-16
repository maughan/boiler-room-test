import useSWR, { Fetcher } from 'swr'

const baseUrl = 'https://events-api.dice.fm/v1/events'
const apiKey = 'dHmvC0ZXzF4h1mWldfur13c6s4Ix6wCF4OTzozXC'

export function useEvents<EventsResponse>(query: Query) {
  const fetcher: Fetcher<EventsResponse, typeof query> = async (query) => {
    const url = baseUrl + '?' + new URLSearchParams(query as Record<string, any>).toString()
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    }).catch(err => {
      throw new Error('An error occured', err)
    }).then(res => res.json())

    return res
  }

  return useSWR<EventsResponse, Error>(query, fetcher)
}

