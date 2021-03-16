import React from 'react'

interface IModalNoteEditorContext {
  title: string
  shown: boolean
  noteId: string | number
  showModal: () => void
  hideModal: () => void
  setNoteId: (id: string | number) => void
}

export const ModalNoteEditorContext = React.createContext<IModalNoteEditorContext>(
  {
    title: 'Заметка',
    shown: false,
    noteId: -1,
    showModal: () => {},
    hideModal: () => {},
    setNoteId: (id: string | number) => {},
  },
)
