import React from 'react'
import ThumbNote from '../ThumbNote/ThumbNote'
import {
  NoteItemCtxMenuStyled,
  NoteItemDateLabelStyled,
  NoteItemLikeStatusStyled,
  NoteItemStyled,
} from './NoteItemStyled'
import CardItem from '../CardItem/CardItem'
import CardCtxMenu from '../CardCtxMenu/CardCtxMenu'
import DateLabel from '../DateLabel/DateLabel'
import LikeStatus from '../LikeStatus/LikeStatus'

interface IProps {
  onClick?: () => void
}

const NoteItem = (props: IProps) => {
  const handleClick = () => (props.onClick ? props.onClick() : null)

  return (
    <NoteItemStyled>
      <CardItem onClick={() => handleClick()}>
        <ThumbNote></ThumbNote>
      </CardItem>
      <NoteItemLikeStatusStyled>
        <LikeStatus></LikeStatus>
      </NoteItemLikeStatusStyled>
      <NoteItemCtxMenuStyled>
        <CardCtxMenu></CardCtxMenu>
      </NoteItemCtxMenuStyled>
      <NoteItemDateLabelStyled>
        <DateLabel>24.02.2021 14:58</DateLabel>
      </NoteItemDateLabelStyled>
    </NoteItemStyled>
  )
}

export default NoteItem
