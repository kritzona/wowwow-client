import React, { useState } from 'react'
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
  id: string | number
  title: string
  content: string
  onSave?: (id: string | number, title: string, content: string) => void
  onCancel?: () => void
}

const NoteEditor = (props: IProps) => {
  const [inputTitle, setInputTitle] = useState(props.title)
  const [inputContent, setInputContent] = useState(props.content)

  const handleInputTitleChange = (value: string) => setInputTitle(value)
  const handleInputContentChange = (value: string) => setInputContent(value)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (props.onSave) props.onSave(props.id, inputTitle, inputContent)
  }
  const handleButtonCancelClick = () => {
    if (props.onCancel) props.onCancel()
  }

  return (
    <NoteEditorStyled
      onSubmit={(event: React.FormEvent) => handleSubmit(event)}
    >
      <NoteEditorTitleStyled>
        <NoteEditorLabelStyled>
          <Text type="caption">Название:</Text>
        </NoteEditorLabelStyled>
        <InputTitle
          placeholder="Введите название"
          value={inputTitle}
          onChange={(value) => handleInputTitleChange(value)}
        ></InputTitle>
      </NoteEditorTitleStyled>
      <NoteEditorContentStyled>
        <NoteEditorLabelStyled>
          <Text type="caption">Содержание:</Text>
        </NoteEditorLabelStyled>
        <InputContent
          placeholder="Введите содержание"
          value={inputContent}
          onChange={(value) => handleInputContentChange(value)}
        ></InputContent>
      </NoteEditorContentStyled>
      <NoteEditorSaveStyled>
        <Button type="submit">Сохранить</Button>
        <Button color="accent" onClick={() => handleButtonCancelClick()}>
          Отмена
        </Button>
      </NoteEditorSaveStyled>
    </NoteEditorStyled>
  )
}

export default NoteEditor
