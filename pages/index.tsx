import React from 'react'
import styled from 'styled-components'
import Button from '../components/button'
import Grid from '../components/grid'
import GridItems from '../components/gridItems'
import Input from '../components/input'
import Row from '../components/row'
import RowSpacer from '../components/rowSpacer'
import Spacer from '../components/Spacer'

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

const Home = () => {
  const [count, setCount] = React.useState(1)
  const [venue, setVenue] = React.useState('')
  const [search, setSearch] = React.useState('')
  const [more, setMore] = React.useState(false)
  const items = []

  for (let i = 1; i <= count; i++) {
    items.push(<GridItems index={i} venue={search} setMore={(more: boolean) => setMore(more)} />)
  }

  async function handleClick() {
    setSearch(venue)
  }

  return <Container>
    <Header>
      <Row justify='end'>
        <Input
          value={venue}
          onChange={value => setVenue(value)}
          style={{ width: 300 }}
        />

        <RowSpacer size={2} />

        <Button text='Search' onClick={handleClick} />
      </Row>
    </Header>

    <Spacer size={4} />

    <Grid>
      {items}
    </Grid>

    <Spacer size={10} />

    {!!more && <Button text='Load more...' onClick={() => setCount(count + 1)} />}
  </Container>
}

export default Home