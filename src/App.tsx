import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppStyled from './AppStyled'
import Header from './components/organisms/Header/Header'
import Content from './components/organisms/Content/Content'
import BottomNavBar from './components/organisms/BottomNavBar/BottomNavBar'

import ModalNoteEditorContainer from './containers/ModalNoteEditorContainer/ModalNoteEditorContainer'

import { ModalNoteEditorContext } from './contexts/ModalNoteEditorContext'
import { ModalNoteCreateContext } from './contexts/ModalNoteCreateContext'
import HomeView from './views/HomeView/HomeView'
import FavoriteView from './views/FavoriteView/FavoriteView'

interface IProps {}

const App = (props: IProps) => {
  const [modalNoteEditorShown, setModalNoteEditorShown] = useState(false)
  const [modalNoteEditorNoteId, setModalNoteEditorNoteId] = useState<
    string | number
  >(-1)

  const [modalNoteCreateShown, setModalNoteCreateShown] = useState(false)

  return (
    <AppStyled>
      <Router>
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
              <Switch>
                <Route path="/" exact>
                  <HomeView></HomeView>
                </Route>
                <Route path="/favorite">
                  <FavoriteView></FavoriteView>
                </Route>
              </Switch>
            </Content>
            <BottomNavBar></BottomNavBar>

            <ModalNoteEditorContainer></ModalNoteEditorContainer>
          </ModalNoteCreateContext.Provider>
        </ModalNoteEditorContext.Provider>
      </Router>
    </AppStyled>
  )
}

export default App
