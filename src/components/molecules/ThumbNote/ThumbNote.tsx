import React from 'react'
import {
  ThumbNoteContentStyled,
  ThumbNoteStyled,
  ThumbNoteTitleStyled,
} from './ThumbNoteStyled'
import Text from '../../atoms/Text/Text'

interface IProps {}

const ThumbNote = (props: IProps) => {
  return (
    <ThumbNoteStyled>
      <ThumbNoteTitleStyled>
        <Text type="subtitle-1">Заметка</Text>
      </ThumbNoteTitleStyled>
      <ThumbNoteContentStyled>
        <Text type="caption">Чо то там где то там, а вот и еще текст...</Text>
      </ThumbNoteContentStyled>
    </ThumbNoteStyled>
  )
}

export default ThumbNote
