import React from 'react'
import {
  ThumbNoteContentStyled,
  ThumbNoteStyled,
  ThumbNoteTitleStyled,
} from './ThumbNoteStyled'
import Text from '../../atoms/Text/Text'

interface IProps {
  title: string
  content: string
}

const ThumbNote = (props: IProps) => {
  return (
    <ThumbNoteStyled>
      <ThumbNoteTitleStyled>
        <Text type="subtitle-1">{props.title}</Text>
      </ThumbNoteTitleStyled>
      <ThumbNoteContentStyled>
        <Text type="caption">{props.content}</Text>
      </ThumbNoteContentStyled>
    </ThumbNoteStyled>
  )
}

export default ThumbNote
