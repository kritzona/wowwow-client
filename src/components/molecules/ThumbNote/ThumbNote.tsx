import React from 'react'
import {
  ThumbNoteContentStyled,
  ThumbNoteStyled,
  ThumbNoteTitleStyled,
} from './ThumbNoteStyled'
import Text from '../../atoms/Text/Text'
import { useMediaQuery } from 'react-responsive'

interface IProps {
  title: string
  content: string
}

const ThumbNote = (props: IProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 })
  const isLaptop = useMediaQuery({ minWidth: 992, maxWidth: 1199 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  const isPhablet = useMediaQuery({ minWidth: 540, maxWidth: 767 })
  const isMobile = useMediaQuery({ minWidth: 350, maxWidth: 539 })
  const isVerySmallDevice = useMediaQuery({ maxWidth: 349 })

  const formatTitle = (title: string) => {
    let maxLength = 12

    if (isDesktop) {
      maxLength = 17
    } else if (isLaptop) {
      maxLength = 17
    } else if (isTablet) {
      maxLength = 17
    } else if (isPhablet) {
      maxLength = 17
    } else if (isMobile) {
      maxLength = 12
    } else if (isVerySmallDevice) {
      maxLength = 10
    }

    return `${title.slice(0, maxLength)}${
      title.length >= maxLength ? '...' : ''
    }`
  }
  const formatContent = (content: string) => {
    let maxLength = 35

    if (isVerySmallDevice) maxLength = 30

    return `${content.slice(0, maxLength)}${
      content.length >= maxLength ? '...' : ''
    }`
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
