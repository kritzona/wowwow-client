import React from 'react'
import { CardItemStyled } from './CardItemStyled'

interface IProps {
  children?: React.ReactNode
  onClick?: () => void
}

const CardItem = (props: IProps) => {
  const handleClick = () => {
    setTimeout(() => {
      if (props.onClick) props.onClick()
    }, 100)
  }

  return (
    <CardItemStyled onClick={() => handleClick()}>
      {props.children}
    </CardItemStyled>
  )
}

export default CardItem
