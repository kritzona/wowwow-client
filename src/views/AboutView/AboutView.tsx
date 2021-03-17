import React from 'react'
import { AboutViewStyled } from './AboutViewStyled'
import Text from '../../components/atoms/Text/Text'

interface IProps {}

const AboutView = (props: IProps) => {
  return (
    <AboutViewStyled>
      <Text type="heading-2">О приложении</Text>
      <br />
      <Text type="subtitle-1">
        Легковесное приложение для создания заметок. Пользоваться им довольно
        просто без лишнего мусора)
      </Text>
      <br />
      <br />
      <Text type="overline">Автор: kritzona</Text>
      <br />
      <Text type="overline">Дизайн: kritzona</Text>
      <br />
      <Text type="overline">Стек технологий: React.js и его модули</Text>
      <br />
    </AboutViewStyled>
  )
}

export default AboutView
