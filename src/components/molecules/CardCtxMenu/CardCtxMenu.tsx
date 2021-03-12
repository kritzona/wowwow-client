import React from 'react'
import {
  CardCtxMenuStyled,
  CardCtxMenuLikeItemStyled,
  CardCtxMenuTrashItemStyled,
} from './CardCtxMenuStyled'

interface IProps {
  onRemove?: () => void
  onToggleFavorite?: () => void
}

const CardCtxMenu = (props: IProps) => {
  const handleLikeClick = () =>
    props.onToggleFavorite ? props.onToggleFavorite() : null
  const handleTrashClick = () => (props.onRemove ? props.onRemove() : null)

  return (
    <CardCtxMenuStyled>
      <CardCtxMenuLikeItemStyled
        onClick={() => handleLikeClick()}
      ></CardCtxMenuLikeItemStyled>
      <CardCtxMenuTrashItemStyled
        onClick={() => handleTrashClick()}
      ></CardCtxMenuTrashItemStyled>
    </CardCtxMenuStyled>
  )
}

export default CardCtxMenu
