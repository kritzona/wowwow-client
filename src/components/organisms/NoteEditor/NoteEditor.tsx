import React from 'react'
import Button from '../../atoms/Button/Button'
import InputContent from '../../atoms/InputContent/InputContent'
import InputTitle from '../../atoms/InputTitle/InputTitle'
import Text from '../../atoms/Text/Text'
import {
  NoteEditorStyled,
  NoteEditorLabelStyled,
  NoteEditorTitleStyled,
  NoteEditorContentStyled,
  NoteEditorSaveStyled,
} from './NoteEditorStyled'

interface IProps {}

const NoteEditor = (props: IProps) => {
  return (
    <NoteEditorStyled>
      <NoteEditorTitleStyled>
        <NoteEditorLabelStyled>
          <Text type="subtitle-1">Название:</Text>
        </NoteEditorLabelStyled>
        <InputTitle placeholder="Введите название"></InputTitle>
      </NoteEditorTitleStyled>
      <NoteEditorContentStyled>
        <NoteEditorLabelStyled>
          <Text type="subtitle-1">Содержание:</Text>
        </NoteEditorLabelStyled>
        <InputContent placeholder="Введите содержание"></InputContent>
      </NoteEditorContentStyled>
      <NoteEditorSaveStyled>
        <Button>Сохранить</Button>
        <Button color="accent">Отмена</Button>
      </NoteEditorSaveStyled>
    </NoteEditorStyled>
  )
}

export default NoteEditor
