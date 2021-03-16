import React, { useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../../components/molecules/Modal/Modal'
import NoteEditor from '../../components/organisms/NoteEditor/NoteEditor'
import { ModalNoteEditorContext } from '../../contexts/ModalNoteEditorContext'
import { RootState } from '../../store/store'

interface IProps {}

const ModalNoteEditorContainer = () => {
  const modalNoteEditorContext = useContext(ModalNoteEditorContext)
  const changedNote = useSelector((state: RootState) =>
    state.note.items.find((item) => item.id === modalNoteEditorContext.noteId),
  )

  const hideModal = () => modalNoteEditorContext.hideModal()

  const handleCloseModal = () => hideModal()

  return (
    <React.Fragment>
      {modalNoteEditorContext.shown && changedNote && (
        <Modal
          title={modalNoteEditorContext.title}
          onClose={() => handleCloseModal()}
        >
          <NoteEditor
            title={changedNote.title}
            content={changedNote.content}
          ></NoteEditor>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default ModalNoteEditorContainer
