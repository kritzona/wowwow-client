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
import { INoteItem } from '../../store/note/types'

interface IProps {
  title: string
  visible: 'all' | 'only-favorite'
  onOpenNote?: () => void
}

const NotesContainer = (props: IProps) => {
  const modalNoteEditorContext = useContext(ModalNoteEditorContext)
  const noteItems = useSelector((state: RootState) => {
    const filteredItems = state.note.items
      .filter((item) => {
        switch (props.visible) {
          case 'all':
            return true
          case 'only-favorite':
            if (item.favorite) return true
            break
          default:
            return true
        }

        return false
      })
      .sort((itemA: INoteItem, itemB: INoteItem) => {
        return itemB.updatedAt.getTime() - itemA.updatedAt.getTime()
      })

    return filteredItems
  })
  const dispatch = useDispatch()

  const showModal = (id: string | number) =>
    modalNoteEditorContext.showModal(id)

  const handleOpenNote = (id: string | number) => showModal(id)

  const handleAdd = () =>
    dispatch(
      noteAddItemAction({
        id: Date.now(),
        title: `Новая заметка`,
        content: '',
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
      title={props.title}
      visible={props.visible}
      items={noteItems}
      onOpenNote={(id: string | number) => handleOpenNote(id)}
      onAdd={() => handleAdd()}
      onRemove={(id: string | number) => handleRemove(id)}
      onToggleFavorite={(id: string | number) => handleToggleFavorite(id)}
    ></Notes>
  )
}

export default NotesContainer
