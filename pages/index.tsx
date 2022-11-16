import React from 'react'
import styled from 'styled-components'
import { Button, Grid, GridItem, Input, Row, RowSpacer, Spacer } from '../components'

const Home: React.FC = () => {
  const [count, setCount] = React.useState(1)
  const [venue, setVenue] = React.useState('')
  const [search, setSearch] = React.useState('')
  const [more, setMore] = React.useState(false)
  const items: Array<JSX.Element> = []

  React.useMemo(() => {
    for (let i = 1; i <= count; i++) {
      items.push(
        <GridItem
          index={i}
          venue={search}
          setMore={(more: boolean) => setMore(more)}
          key={i}
        />
      )
    }
  }, [items, search])

  async function handleClick() {
    setSearch(venue)
  }

  return (
    <Container>
      <Header>
        <Row justify='end'>
          <Input
            value={venue}
            onChange={value => setVenue(value)}
            style={{ width: 300 }}
          />

          <RowSpacer size={2} />

          <Button onClick={handleClick}>Search</Button>
        </Row>
      </Header>

      <Spacer size={4} />

      <Grid>
        {items}
      </Grid>

      <Spacer size={10} />

      {!!more && <Button onClick={() => setCount(count + 1)}>Load more...</Button>}
    </Container>
  )
}

const Header = styled.div`
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