import React from 'react'
import ThumbNote from '../ThumbNote/ThumbNote'
import {
  NoteItemCtxMenuStyled,
  NoteItemDateLabelStyled,
  NoteItemStyled,
} from './NoteItemStyled'
import CardItem from '../CardItem/CardItem'
import CardCtxMenu from '../CardCtxMenu/CardCtxMenu'
import DateLabel from '../DateLabel/DateLabel'

interface IProps {}

const NoteItem = (props: IProps) => {
  return (
    <NoteItemStyled>
      <CardItem>
        <ThumbNote></ThumbNote>
      </CardItem>
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
