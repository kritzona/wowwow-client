import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Notes from '../../components/organisms/Notes/Notes'

interface IProps {
  onOpenNote?: () => void
}

const NotesContainer = (props: IProps) => {
  const noteItems = useSelector((state: RootState) => state.note.items)
  const dispatch = useDispatch()

  const handleOpenNote = () => (props.onOpenNote ? props.onOpenNote() : null)

  return <Notes items={noteItems} onOpenNote={() => handleOpenNote()}></Notes>
}

export default NotesContainer
