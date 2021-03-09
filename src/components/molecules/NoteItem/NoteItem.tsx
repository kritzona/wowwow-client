import React from 'react'
import ThumbNote from '../ThumbNote/ThumbNote'
import { NoteItemCtxMenuStyled, NoteItemStyled } from './NoteItemStyled'
import CardItem from '../CardItem/CardItem'
import CardCtxMenu from '../CardCtxMenu/CardCtxMenu'

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
    </NoteItemStyled>
  )
}

export default NoteItem
