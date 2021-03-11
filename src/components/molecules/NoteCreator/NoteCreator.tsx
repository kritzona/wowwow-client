import React from 'react'
import {
  NoteCreatorActionTextStyled,
  NoteCreatorContentStyled,
  NoteCreatorIconStyled,
  NoteCreatorStyled,
} from './NoteCreatorStyled'
import CardItem from '../CardItem/CardItem'
import Text from '../../atoms/Text/Text'

interface IProps {}

const NoteCreator = (props: IProps) => {
  return (
    <NoteCreatorStyled>
      <CardItem>
        <NoteCreatorContentStyled>
          <NoteCreatorIconStyled></NoteCreatorIconStyled>
          <NoteCreatorActionTextStyled>
            <Text type="button-text">
              Создать
              <br />
              заметку
            </Text>
          </NoteCreatorActionTextStyled>
        </NoteCreatorContentStyled>
      </CardItem>
    </NoteCreatorStyled>
  )
}

export default NoteCreator
