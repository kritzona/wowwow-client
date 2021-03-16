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

interface IProps {
  title: string
  content: string
}

const NoteEditor = (props: IProps) => {
  return (
    <NoteEditorStyled>
      <NoteEditorTitleStyled>
        <NoteEditorLabelStyled>
          <Text type="caption">Название:</Text>
        </NoteEditorLabelStyled>
        <InputTitle
          placeholder="Введите название"
          value={props.title}
        ></InputTitle>
      </NoteEditorTitleStyled>
      <NoteEditorContentStyled>
        <NoteEditorLabelStyled>
          <Text type="caption">Содержание:</Text>
        </NoteEditorLabelStyled>
        <InputContent
          placeholder="Введите содержание"
          value={props.content}
        ></InputContent>
      </NoteEditorContentStyled>
      <NoteEditorSaveStyled>
        <Button>Сохранить</Button>
        <Button color="accent">Отмена</Button>
      </NoteEditorSaveStyled>
    </NoteEditorStyled>
  )
}

export default NoteEditor
