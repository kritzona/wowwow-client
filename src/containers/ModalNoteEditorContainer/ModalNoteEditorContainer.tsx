import React, { useContext, useState, useEffect } from 'react'
import Modal from '../../components/molecules/Modal/Modal'
import NoteEditor from '../../components/organisms/NoteEditor/NoteEditor'
import { ModalNoteEditorContext } from '../../contexts/ModalNoteEditorContext'

interface IProps {}

const ModalNoteEditorContainer = () => {
  const [shown, setShown] = useState(false)
  const modalNoteEditorContext = useContext(ModalNoteEditorContext)

  const showModal = () => modalNoteEditorContext.showModal()
  const hideModal = () => modalNoteEditorContext.hideModal()

  const handleOpenNote = () => showModal()
  const handleCloseModal = () => hideModal()

  return (
    <React.Fragment>
      {modalNoteEditorContext.shown && (
        <Modal title="Заметка" onClose={() => handleCloseModal()}>
          <NoteEditor></NoteEditor>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default ModalNoteEditorContainer
