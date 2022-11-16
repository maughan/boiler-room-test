import NextHead from "next/head"

interface Props {
  children: React.ReactNode;
}

const Head = (props: Props) => {
  return (
    <NextHead>
      <title>Boiler Room</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-language" content="en-gb" />
      <link rel="icon" href="/favicon.ico" />

      {props.children || []}
    </NextHead>
  )
}

export default Head