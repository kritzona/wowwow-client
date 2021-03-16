import React from 'react'

interface IModalNoteCreateContext {
  title: string
  shown: boolean
  showModal: () => void
  hideModal: () => void
}

export const ModalNoteCreateContext = React.createContext<IModalNoteCreateContext>(
  {
    title: 'Новая заметка',
    shown: false,
    showModal: () => null,
    hideModal: () => null,
  },
)
