import React from 'react'
import {
  CardCtxMenuStyled,
  CardCtxMenuLikeItemStyled,
  CardCtxMenuTrashItemStyled,
} from './CardCtxMenuStyled'

interface IProps {}

const CardCtxMenu = (props: IProps) => {
  return (
    <CardCtxMenuStyled>
      <CardCtxMenuLikeItemStyled></CardCtxMenuLikeItemStyled>
      <CardCtxMenuTrashItemStyled></CardCtxMenuTrashItemStyled>
    </CardCtxMenuStyled>
  )
}

export default CardCtxMenu
