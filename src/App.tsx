import React, { useState } from 'react'
import AppStyled from './AppStyled'
import Header from './components/organisms/Header/Header'
import Content from './components/organisms/Content/Content'
import BottomNavBar from './components/organisms/BottomNavBar/BottomNavBar'

import Modal from './components/molecules/Modal/Modal'
import Notes from './components/organisms/Notes/Notes'

interface IProps {}

const App = (props: IProps) => {
  const [shownModal, setShownModal] = useState(false)

  const showModal = () => setShownModal(true)
  const hideModal = () => setShownModal(false)

  const handleOpenNote = () => showModal()
  const handleCloseModal = () => hideModal()

  return (
    <AppStyled>
      <Header></Header>
      <Content>
        <Notes onOpenNote={() => handleOpenNote()}></Notes>
      </Content>
      <BottomNavBar></BottomNavBar>
      {shownModal && <Modal onClose={() => handleCloseModal()}></Modal>}
    </AppStyled>
  )
}

export default App
