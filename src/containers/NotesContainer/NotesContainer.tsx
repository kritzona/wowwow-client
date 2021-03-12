import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Notes from '../../components/organisms/Notes/Notes'
import {
  noteAddItemAction,
  noteRemoveItemAction,
  noteToggleFavoriteAction,
} from '../../store/note/actions'

interface IProps {
  onOpenNote?: () => void
}

const NotesContainer = (props: IProps) => {
  const noteItems = useSelector((state: RootState) => state.note.items)
  const dispatch = useDispatch()

  const handleAdd = () =>
    dispatch(
      noteAddItemAction({
        id: Date.now(),
        title: `Заметка ${Number(Math.random() * 100).toFixed(0)}`,
        content: 'Lorem lorem lorem',
        favorite: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    )
  const handleRemove = (id: string | number) =>
    dispatch(noteRemoveItemAction(id))
  const handleToggleFavorite = (id: string | number) =>
    dispatch(noteToggleFavoriteAction(id))

  const handleOpenNote = () => (props.onOpenNote ? props.onOpenNote() : null)

  return (
    <Notes
      items={noteItems}
      onOpenNote={() => handleOpenNote()}
      onAdd={() => handleAdd()}
      onRemove={(id: string | number) => handleRemove(id)}
      onToggleFavorite={(id: string | number) => handleToggleFavorite(id)}
    ></Notes>
  )
}

export default NotesContainer
