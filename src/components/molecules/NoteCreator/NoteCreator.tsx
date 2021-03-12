import React from 'react'
import {
  NoteCreatorActionTextStyled,
  NoteCreatorContentStyled,
  NoteCreatorIconStyled,
  NoteCreatorStyled,
} from './NoteCreatorStyled'
import CardItem from '../CardItem/CardItem'
import Text from '../../atoms/Text/Text'

interface IProps {
  onClick?: () => void
}

const NoteCreator = (props: IProps) => {
  const handleClick = () => (props.onClick ? props.onClick() : null)

  return (
    <NoteCreatorStyled>
      <CardItem onClick={() => handleClick()}>
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
