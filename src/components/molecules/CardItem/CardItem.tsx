import React from 'react'
import { CardItemStyled } from './CardItemStyled'

interface IProps {
  children?: React.ReactNode
}

const CardItem = (props: IProps) => {
  return <CardItemStyled>{props.children}</CardItemStyled>
}

export default CardItem
