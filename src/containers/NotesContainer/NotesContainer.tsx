import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Notes from '../../components/organisms/Notes/Notes'
import {
  noteAddItemAction,
  noteRemoveItemAction,
  noteToggleFavoriteAction,
} from '../../store/note/actions'
import { ModalNoteEditorContext } from '../../contexts/ModalNoteEditorContext'

interface IProps {
  onOpenNote?: () => void
}

const NotesContainer = (props: IProps) => {
  const modalNoteEditorContext = useContext(ModalNoteEditorContext)
  const noteItems = useSelector((state: RootState) => state.note.items)
  const dispatch = useDispatch()

  const showModal = (id: string | number) =>
    modalNoteEditorContext.showModal(id)
  const hideModal = () => modalNoteEditorContext.hideModal()

  const handleOpenNote = (id: string | number) => showModal(id)
  const handleCloseModal = () => hideModal()

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

  return (
    <Notes
      items={noteItems}
      onOpenNote={(id: string | number) => handleOpenNote(id)}
      onAdd={() => handleAdd()}
      onRemove={(id: string | number) => handleRemove(id)}
      onToggleFavorite={(id: string | number) => handleToggleFavorite(id)}
    ></Notes>
  )
}

export default NotesContainer
