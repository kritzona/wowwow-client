import React from 'react'
import { NotesStyled } from './NotesStyled'
import NoteItem from '../../molecules/NoteItem/NoteItem'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import NoteCreator from '../../molecules/NoteCreator/NoteCreator'
import Text from '../../atoms/Text/Text'
import { INoteItem } from '../../../store/note/types'

interface IProps {
  items: INoteItem[]
  onOpenNote?: () => void
}

const Notes = (props: IProps) => {
  const handleOpenNote = () => (props.onOpenNote ? props.onOpenNote() : null)

  return (
    <NotesStyled>
      <Text type="heading-2">Все заметки</Text>
      <br />
      <Row gutter={true}>
        {props.items.map((item) => (
          <Column
            key={item.id}
            size={3}
            desktopSize={3}
            laptopSize={3}
            tabletSize={4}
            phabletSize={6}
            mobileSize={6}
          >
            <NoteItem data={item} onClick={() => handleOpenNote()}></NoteItem>
          </Column>
        ))}

        <Column
          size={3}
          desktopSize={3}
          laptopSize={3}
          tabletSize={4}
          phabletSize={6}
          mobileSize={6}
        >
          <NoteCreator></NoteCreator>
        </Column>
      </Row>
    </NotesStyled>
  )
}

export default Notes
