import React, { useState } from 'react'
import AppStyled from './AppStyled'
import Header from './components/organisms/Header/Header'
import Content from './components/organisms/Content/Content'
import BottomNavBar from './components/organisms/BottomNavBar/BottomNavBar'

import NotesContainer from './containers/NotesContainer/NotesContainer'
import ModalNoteEditorContainer from './containers/ModalNoteEditorContainer/ModalNoteEditorContainer'

import { ModalNoteEditorContext } from './contexts/ModalNoteEditorContext'
import { ModalNoteCreateContext } from './contexts/ModalNoteCreateContext'

interface IProps {}

const App = (props: IProps) => {
  const [modalNoteEditorShown, setModalNoteEditorShown] = useState(false)
  const [modalNoteEditorNoteId, setModalNoteEditorNoteId] = useState<
    string | number
  >(-1)

  const [modalNoteCreateShown, setModalNoteCreateShown] = useState(false)

  return (
    <AppStyled>
      <ModalNoteEditorContext.Provider
        value={{
          title: 'Заметка',
          shown: modalNoteEditorShown,
          noteId: modalNoteEditorNoteId,
          showModal: (id: string | number) => {
            setModalNoteEditorNoteId(id)
            setModalNoteEditorShown(true)

            return
          },
          hideModal: () => setModalNoteEditorShown(false),
        }}
      >
        <ModalNoteCreateContext.Provider
          value={{
            title: 'Новая заметка',
            shown: modalNoteCreateShown,
            showModal: () => setModalNoteCreateShown(true),
            hideModal: () => setModalNoteCreateShown(false),
          }}
        >
          <Header></Header>
          <Content>
            <NotesContainer></NotesContainer>
          </Content>
          <BottomNavBar></BottomNavBar>

          <ModalNoteEditorContainer></ModalNoteEditorContainer>
        </ModalNoteCreateContext.Provider>
      </ModalNoteEditorContext.Provider>
    </AppStyled>
  )
}

export default App
