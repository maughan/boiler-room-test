import useSWR, { Fetcher, SWRResponse } from "swr";

export function useApi<T, Error>(query: Query, fetcher: Fetcher<T>): SWRResponse<T, Error> & { loading: boolean } {
  const data = useSWR<T, Error>(query, fetcher)

  return { ...data, loading: !data.data && !data.error }
}