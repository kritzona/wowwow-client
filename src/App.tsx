import React from 'react'
import AppStyled from './AppStyled'
import Header from './components/organisms/Header/Header'

interface IProps {}

const App = (props: IProps) => {
  return (
    <AppStyled>
      <Header></Header>
    </AppStyled>
  )
}

export default App
