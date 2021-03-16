import React from 'react'
import InputTitle from '../../atoms/InputTitle/InputTitle'
import Text from '../../atoms/Text/Text'
import { NoteCreatorContentStyled } from '../../molecules/NoteCreator/NoteCreatorStyled'
import {
  NoteEditorStyled,
  NoteEditorTitleLabelStyled,
  NoteEditorTitleStyled,
} from './NoteEditorStyled'

interface IProps {}

const NoteEditor = (props: IProps) => {
  return (
    <NoteEditorStyled>
      <NoteEditorTitleStyled>
        <NoteEditorTitleLabelStyled>
          <Text type="subtitle-1">Название:</Text>
        </NoteEditorTitleLabelStyled>
        <InputTitle placeholder="Введите название"></InputTitle>
      </NoteEditorTitleStyled>
      <NoteCreatorContentStyled></NoteCreatorContentStyled>
    </NoteEditorStyled>
  )
}

export default NoteEditor
