import React from 'react'
import AppStyled from './AppStyled'
import Button from './components/atoms/Button/Button'

interface IProps {}

const App = (props: IProps) => {
  return (
    <AppStyled>
      <Button></Button>
    </AppStyled>
  )
}

export default App
