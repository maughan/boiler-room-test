import React from 'react'
import styled from 'styled-components'

export type TypographyType = 'body' | 'bodyBold' | 'header' | 'subheader' | 'price' | 'caption' | 'sectionHeader'

interface TypographyProps {
  type?: TypographyType
  children?: string
}

interface TextProps {
  size: number
  lineHeight?: number
  weight?: number
  color?: string
  spacing?: number
}

const typeStyles = {
  body: {
    size: 14,
    lineHeight: 18,
  },
  caption: {
    size: 12,
    color: 'gray',
    lineHeight: 12,
  },
  bodyBold: {
    size: 14,
    weight: 600,
    lineHeight: 18,
  },
  header: {
    size: 24,
    weight: 600,
    lineHeight: 22,
  },
  subheader: {
    size: 16,
    weight: 500,
    lineHeight: 20,
  },
  price: {
    size: 24,
    lineHeight: 22,
    weight: 300,
  },
  sectionHeader: {
    size: 14,
    spacing: 1,
    weight: 500,
    color: 'blue',
  }
}

const Typography: React.FC<TypographyProps> = (props: TypographyProps) => {
  const { type = 'body' } = props

  const textProps = typeStyles[type]

  return (
    <Text {...textProps}>
      {props.children}
    </Text>
  )
}

const Text = styled.p<TextProps>`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  line-height: ${props => props.lineHeight}px;
  padding: 0;
  margin: 0;
  color: ${props => props.color ?? 'black'};
  letter-spacing: ${props => props.spacing ?? 0}px;
  word-break: break-word;
`

export default Typography