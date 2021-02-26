import React from 'react'
import AppStyled from './AppStyled'
import Header from './components/organisms/Header/Header'
import Content from './components/organisms/Content/Content'
import Text from './components/atoms/Text/Text'

interface IProps {}

const App = (props: IProps) => {
  return (
    <AppStyled>
      <Header></Header>
      <Content>
        <Text type="heading-5">Заголовок</Text>
      </Content>
    </AppStyled>
  )
}

export default App
