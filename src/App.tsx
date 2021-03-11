import React, { useState } from 'react'
import AppStyled from './AppStyled'
import Header from './components/organisms/Header/Header'
import Content from './components/organisms/Content/Content'
import Text from './components/atoms/Text/Text'
import BottomNavBar from './components/organisms/BottomNavBar/BottomNavBar'
import NoteItem from './components/molecules/NoteItem/NoteItem'
import Row from './components/atoms/Row/Row'
import Column from './components/atoms/Column/Column'
import NoteCreator from './components/molecules/NoteCreator/NoteCreator'
import Modal from './components/molecules/Modal/Modal'

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
        <Text type="heading-2">Все заметки</Text>
        <br />
        <Row gutter={true}>
          <Column
            size={3}
            desktopSize={3}
            laptopSize={3}
            tabletSize={4}
            phabletSize={6}
            mobileSize={6}
          >
            <NoteItem onClick={() => handleOpenNote()}></NoteItem>
          </Column>
          <Column
            size={3}
            desktopSize={3}
            laptopSize={3}
            tabletSize={4}
            phabletSize={6}
            mobileSize={6}
          >
            <NoteItem></NoteItem>
          </Column>
          <Column
            size={3}
            desktopSize={3}
            laptopSize={3}
            tabletSize={4}
            phabletSize={6}
            mobileSize={6}
          >
            <NoteItem></NoteItem>
          </Column>
          <Column
            size={3}
            desktopSize={3}
            laptopSize={3}
            tabletSize={4}
            phabletSize={6}
            mobileSize={6}
          >
            <NoteItem></NoteItem>
          </Column>
          <Column
            size={3}
            desktopSize={3}
            laptopSize={3}
            tabletSize={4}
            phabletSize={6}
            mobileSize={6}
          >
            <NoteCreator></NoteCreator>
          </Column>
        </Row>
      </Content>
      <BottomNavBar></BottomNavBar>
      {shownModal && <Modal onClose={() => handleCloseModal()}></Modal>}
    </AppStyled>
  )
}

export default App
