import Head from './Head'

interface Props {
  title?: string
}

const Meta: React.FC<Props> = (props: Props) => {
  const title = props.title || `Boiler Room`
  const description = `Search for Boiler Room events in your local area.`
  const url = `http://localhost:3000`
  const thumbnail = "/favicon.png"

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="thumbnail" content={thumbnail} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:image" content={thumbnail} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={thumbnail} />

      <link rel="canonical" href={url} />
    </Head>
  )
}

export default Meta