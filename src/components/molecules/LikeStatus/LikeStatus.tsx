import React from 'react'
import { LikeStatusStyled } from './LikeStatusStyled'

interface IProps {
  onClick?: () => void
}

const LikeStatus = (props: IProps) => {
  const handleClick = () => {
    setTimeout(() => {
      if (props.onClick) props.onClick()
    }, 100)
  }

  return <LikeStatusStyled onClick={() => handleClick()}></LikeStatusStyled>
}

export default LikeStatus
