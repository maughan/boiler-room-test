import React from 'react'
import styled from 'styled-components'
import { Button, Input, Row, RowSpacer, Spacer } from '../components'
import EventList from '../components/organisms/EventList'
import { Meta } from '../components/seo'

const Home: React.FC = () => {
  const [venue, setVenue] = React.useState('')
  const [search, setSearch] = React.useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSearch(venue)
  }

  return (
    <Container>
      <Meta />
      <Header onSubmit={handleSubmit}>
        <Row justify='end'>
          <Input
            value={venue}
            onChange={value => setVenue(value)}
            style={{ width: 300 }}
          />

          <RowSpacer size={2} />

          <Button type='submit'>Search</Button>
        </Row>
      </Header>

      <Spacer size={4} />

      <EventList venue={search} />
    </Container>
  )
}

const Header = styled.form`
  padding: 50px 10vw;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`

export default Home