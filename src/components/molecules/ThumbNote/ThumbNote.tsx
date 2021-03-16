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
  const formatTitle = (title: string) => {
    return `${title.slice(0, 12)}${title.length >= 12 ? '...' : ''}`
  }
  const formatContent = (title: string) => {
    return `${title.slice(0, 30)}${title.length >= 30 ? '...' : ''}`
  }

  return (
    <ThumbNoteStyled>
      <ThumbNoteTitleStyled>
        <Text type="subtitle-1">{formatTitle(props.title)}</Text>
      </ThumbNoteTitleStyled>
      <ThumbNoteContentStyled>
        <Text type="caption">{formatContent(props.content)}</Text>
      </ThumbNoteContentStyled>
    </ThumbNoteStyled>
  )
}

export default ThumbNote
