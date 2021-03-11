import React from 'react'
import AppStyled from './AppStyled'
import Header from './components/organisms/Header/Header'
import Content from './components/organisms/Content/Content'
import Text from './components/atoms/Text/Text'
import BottomNavBar from './components/organisms/BottomNavBar/BottomNavBar'
import NoteItem from './components/molecules/NoteItem/NoteItem'
import Row from './components/atoms/Row/Row'
import Column from './components/atoms/Column/Column'

interface IProps {}

const App = (props: IProps) => {
  return (
    <AppStyled>
      <Header></Header>
      <Content>
        <Text type="heading-2">Заголовок</Text>
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
            <NoteItem></NoteItem>
          </Column>
        </Row>
      </Content>
      <BottomNavBar></BottomNavBar>
    </AppStyled>
  )
}

export default App
