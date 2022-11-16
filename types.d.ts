type MusicTrack = {
  open_url: string
  preview_url: string
  title: string
}

type EventImages = {
  brand: null
  landscape: string
  portrait: string
  square: string
}

type DetailedArtists = {
  headliner: boolean
  id: number
  name: string
}

type Venue = {
  city: City,
  id: number
  name: string
}

type City = {
  code: string
  country_alpha3: string
  country_id: string
  country_name: string
  id: string
  name: string
}

type TicketType = {
  id: number
  name: string
  price: {
    face_value: number
    fees: number
    total: number
  },
  sold_out: boolean
}

type Promoters = {
  id: number
  name: string
}

type DiceLocation = {
  accuracy: number
  city: string
  country: string
  lat: number
  lng: number
  place: string
  street: string
  zip: string
  region: string
  state: string
}

type Lineup = {
  details: string
  time: string
}

type DiceEvent = {
  age_limit: string
  sale_end_date: string
  raw_description: string
  status: string
  images: Array<Record<string, string>>
  apple_music_tracks: Array<MusicTrack>
  event_images: EventImages
  name: string
  presented_by: string
  genre_tags: Array<Record<string, string>>
  hash: string
  venue: string
  detailed_artists: Array<DetailedArtists>
  type: string
  price: null
  venues: Array<Venue>
  url: string
  address: string
  announcement_date: string
  currency: string
  id: string
  spotify_tracks: Array<MusicTrack>
  show_price_breakdown: boolean
  ticket_types: Array<TicketType>
  external_url: null
  promoters: Array<Promoters>
  int_id: number
  destination_event_perm_name: null
  type_tags: Array<Record<string, string>>
  cities: Array<City>
  checksum: string
  featured: boolean
  sold_out: boolean
  date: string
  date_end: string
  location: DiceLocation
  flags: Array<Record<string, string>>
  perm_name: string
  links: Array<Record<string, string>>
  artists: Array<string>
  timezone: string
  tags: Array<Record<string, string>>
  destination_event_id: null
  sale_start_date: string
  lineup: Lineup
  linkout_type: null
  description: string
}

type Links = {
  self: string
  next: string
}

type EventsResponse = {
  data: Array<DiceEvent>
  links: Links
}

type Query = {
  'page[number]': number
  'page[size]': number
  'filter[venue]'?: string
}