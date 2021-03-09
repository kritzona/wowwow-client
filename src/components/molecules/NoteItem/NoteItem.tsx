import React from 'react'
import ThumbNote from '../ThumbNote/ThumbNote'
import { NoteItemStyled } from './NoteItemStyled'
import CardItem from '../CardItem/CardItem'

interface IProps {}

const NoteItem = (props: IProps) => {
  return (
    <NoteItemStyled>
      <CardItem>
        <ThumbNote></ThumbNote>
      </CardItem>
    </NoteItemStyled>
  )
}

export default NoteItem
