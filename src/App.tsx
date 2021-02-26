import React from 'react'
import AppStyled from './AppStyled'
import Button from './components/atoms/Button/Button'
import Wrapper from './components/atoms/Wrapper/Wrapper'
import Row from './components/atoms/Row/Row'
import Column from './components/atoms/Column/Column'

interface IProps {}

const App = (props: IProps) => {
  return (
    <AppStyled>
      <Wrapper paddingY={true}>
        <Row gutter={true}>
          <Column desktopSize={3}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column desktopSize={3}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column desktopSize={3}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column desktopSize={3}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column desktopSize={3}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column desktopSize={3}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column desktopSize={3}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column desktopSize={3}>
            <Button>Нажми на меня</Button>
          </Column>
        </Row>
      </Wrapper>
    </AppStyled>
  )
}

export default App
