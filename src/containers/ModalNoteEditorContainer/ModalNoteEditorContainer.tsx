import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../components/molecules/Modal/Modal'
import NoteEditor from '../../components/organisms/NoteEditor/NoteEditor'
import { ModalNoteEditorContext } from '../../contexts/ModalNoteEditorContext'
import { noteEditItemAction } from '../../store/note/actions'
import { RootState } from '../../store/store'

interface IProps {}

const ModalNoteEditorContainer = (props: IProps) => {
  const modalNoteEditorContext = useContext(ModalNoteEditorContext)
  const changedNote = useSelector((state: RootState) =>
    state.note.items.find((item) => item.id === modalNoteEditorContext.noteId),
  )
  const dispatch = useDispatch()

  const hideModal = () => modalNoteEditorContext.hideModal()

  const handleCloseModal = () => hideModal()
  const handleCancel = () => hideModal()

  const handleSave = (id: string | number, title: string, content: string) => {
    dispatch(noteEditItemAction(id, title, content))
    hideModal()
  }

  return (
    <React.Fragment>
      {modalNoteEditorContext.shown && changedNote && (
        <Modal
          title={modalNoteEditorContext.title}
          onClose={() => handleCloseModal()}
        >
          <NoteEditor
            id={changedNote.id}
            title={changedNote.title}
            content={changedNote.content}
            onSave={(id, title, content) => handleSave(id, title, content)}
            onCancel={() => handleCancel()}
          ></NoteEditor>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default ModalNoteEditorContainer
