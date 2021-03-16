import React from 'react'

interface IModalNoteEditorContext {
  title: string
  shown: boolean
  noteId: string | number
  showModal: (id: string | number) => void
  hideModal: () => void
}

export const ModalNoteEditorContext = React.createContext<IModalNoteEditorContext>(
  {
    title: 'Заметка',
    shown: false,
    noteId: -1,
    showModal: (id: string | number) => {},
    hideModal: () => {},
  },
)
